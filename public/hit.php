<?php
// Records one event (view, whatsapp, call) for one page, per day, and where the visit came from.
// No cookies, no IP addresses.
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
$e = $_POST['e'] ?? '';
$p = $_POST['p'] ?? '';
$s = $_POST['s'] ?? '';
$landing = ($_POST['l'] ?? '') === '1';
if (!in_array($e, ['view', 'whatsapp', 'call'], true)) { http_response_code(400); exit; }
if (!preg_match('#^/[a-z0-9/_-]{0,120}$#', $p)) { http_response_code(400); exit; }
$sources = ['facebook', 'instagram', 'google', 'other-search', 'whatsapp', 'tiktok', 'x', 'linkedin', 'other-site', 'direct'];
if (!in_array($s, $sources, true)) { $s = ''; }
$ua = strtolower($_SERVER['HTTP_USER_AGENT'] ?? '');
if ($ua === '' || preg_match('/bot|crawl|spider|preview|headless/', $ua)) { http_response_code(204); exit; }

$dir = __DIR__ . '/_stats';
if (!is_dir($dir)) { @mkdir($dir, 0750, true); }
$day = gmdate('Y-m-d', time() + 3 * 3600); // Nairobi date

// Opens a JSON file under a lock, lets $change edit it, writes it back. Keeps about a year of days.
function update_json($file, $change) {
  $fh = @fopen($file, 'c+');
  if (!$fh) return;
  flock($fh, LOCK_EX);
  $raw = stream_get_contents($fh);
  $data = $raw ? json_decode($raw, true) : [];
  if (!is_array($data)) { $data = []; }
  $data = $change($data);
  if (count($data) > 400) { ksort($data); $data = array_slice($data, -400, null, true); }
  ftruncate($fh, 0);
  rewind($fh);
  fwrite($fh, json_encode($data));
  fflush($fh);
  flock($fh, LOCK_UN);
  fclose($fh);
}

update_json($dir . '/counts.json', function ($data) use ($day, $p, $e) {
  $data[$day][$p][$e] = ($data[$day][$p][$e] ?? 0) + 1;
  return $data;
});

// Sources: one "visit" per arrival (the first page of a visit), plus the taps that visit led to.
if ($s !== '' && ($e !== 'view' || $landing)) {
  update_json($dir . '/sources.json', function ($data) use ($day, $p, $e, $s, $landing) {
    $k = $e === 'view' ? 'visit' : $e;
    $data[$day][$s][$k] = ($data[$day][$s][$k] ?? 0) + 1;
    if ($e === 'view' && $landing && (isset($data[$day][$s]['pages'][$p]) || count($data[$day][$s]['pages'] ?? []) < 200)) {
      $data[$day][$s]['pages'][$p] = ($data[$day][$s]['pages'][$p] ?? 0) + 1;
    }
    return $data;
  });
}
http_response_code(204);
