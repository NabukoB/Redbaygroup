<?php
// Records one event (view, whatsapp, call) for one page, per day. No cookies, no IP addresses.
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$e = $_POST['e'] ?? '';
$p = $_POST['p'] ?? '';
if (!in_array($e, ['view', 'whatsapp', 'call'], true)) { http_response_code(400); exit; }
if (!preg_match('#^/[a-z0-9/_-]{0,120}$#', $p)) { http_response_code(400); exit; }
$ua = strtolower($_SERVER['HTTP_USER_AGENT'] ?? '');
if ($ua === '' || preg_match('/bot|crawl|spider|preview|headless/', $ua)) { http_response_code(204); exit; }

$dir = __DIR__ . '/_stats';
if (!is_dir($dir)) { @mkdir($dir, 0750, true); }
$file = $dir . '/counts.json';
$fh = @fopen($file, 'c+');
if (!$fh) { http_response_code(204); exit; }
flock($fh, LOCK_EX);
$raw = stream_get_contents($fh);
$data = $raw ? json_decode($raw, true) : [];
if (!is_array($data)) { $data = []; }
$day = gmdate('Y-m-d', time() + 3 * 3600); // Nairobi date
$data[$day][$p][$e] = ($data[$day][$p][$e] ?? 0) + 1;
// Keep about a year of days
if (count($data) > 400) { ksort($data); $data = array_slice($data, -400, null, true); }
ftruncate($fh, 0);
rewind($fh);
fwrite($fh, json_encode($data));
fflush($fh);
flock($fh, LOCK_UN);
fclose($fh);
http_response_code(204);
