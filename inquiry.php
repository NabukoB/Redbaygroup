<?php
// Receives the enquiry form. Saves it privately and emails it to the office.
// Saved in _stats/inquiries.json (blocked from the web). No IP address is stored.
header('Content-Type: application/json');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
function out($ok, $code = 200) { http_response_code($code); echo json_encode(['ok' => $ok]); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') out(false, 405);
if (trim($_POST['website'] ?? '') !== '') out(true); // hidden trap field: bots fill it, people do not
function clean($v, $max) { $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/', '', (string)$v); return mb_substr(trim($v), 0, $max); }
$f = [
  'type' => clean($_POST['type'] ?? '', 80), 'location' => clean($_POST['location'] ?? '', 120),
  'drawings' => clean($_POST['drawings'] ?? '', 80), 'budget' => clean($_POST['budget'] ?? '', 80),
  'start' => clean($_POST['start'] ?? '', 80), 'details' => clean($_POST['details'] ?? '', 1500),
  'name' => clean($_POST['name'] ?? '', 100), 'phone' => clean($_POST['phone'] ?? '', 30), 'email' => clean($_POST['email'] ?? '', 120),
  'page' => clean($_POST['page'] ?? '', 120),
];
if ($f['type'] === '' || $f['location'] === '') out(false, 400);
if (!preg_match('/^[+0-9 ()-]{7,30}$/', $f['phone']) && !filter_var($f['email'], FILTER_VALIDATE_EMAIL)) out(false, 400);
if ($f['email'] !== '' && !filter_var($f['email'], FILTER_VALIDATE_EMAIL)) $f['email'] = '';

$dir = __DIR__ . '/_stats';
if (!is_dir($dir)) { @mkdir($dir, 0750, true); }
$file = $dir . '/inquiries.json';
$fh = @fopen($file, 'c+');
if (!$fh) out(false, 500);
flock($fh, LOCK_EX);
$raw = stream_get_contents($fh);
$all = $raw ? json_decode($raw, true) : [];
if (!is_array($all)) $all = [];
$now = time();
// Simple limit: at most 20 enquiries an hour in total, so a bot cannot flood the office.
$recent = 0; foreach ($all as $r) { if (($r['t'] ?? 0) > $now - 3600) $recent++; }
if ($recent >= 20) { flock($fh, LOCK_UN); fclose($fh); out(false, 429); }
$f['t'] = $now;
$f['when'] = gmdate('Y-m-d H:i', $now + 3 * 3600);
$all[] = $f;
$all = array_slice($all, -500);
ftruncate($fh, 0); rewind($fh); fwrite($fh, json_encode($all)); fflush($fh); flock($fh, LOCK_UN); fclose($fh);

$body = "New enquiry from the website\n\nProject: {$f['type']}\nSite: {$f['location']}\nDrawings: " . ($f['drawings'] ?: 'Not said') . "\nBudget: " . ($f['budget'] ?: 'Not said') . "\nStart: " . ($f['start'] ?: 'Not said') . "\nDetails: " . ($f['details'] ?: '-') . "\n\nName: " . ($f['name'] ?: '-') . "\nPhone: " . ($f['phone'] ?: '-') . "\nEmail: " . ($f['email'] ?: '-') . "\nPage: {$f['page']}\n";
$headers = "From: Redbay Website <hello@redbaygroup.co.ke>\r\nContent-Type: text/plain; charset=UTF-8\r\n";
if ($f['email'] !== '') $headers .= 'Reply-To: ' . str_replace(["\r", "\n"], '', $f['email']) . "\r\n";
@mail('hello@redbaygroup.co.ke', 'Website enquiry: ' . str_replace(["\r", "\n"], ' ', $f['type']) . ', ' . str_replace(["\r", "\n"], ' ', $f['location']), $body, $headers);
out(true);
