<?php
// Private tally page: views, WhatsApp taps and calls per page. Not linked anywhere; not indexed.
header('X-Robots-Tag: noindex, nofollow');
header('Cache-Control: no-store');
$days = max(1, min(365, (int)($_GET['days'] ?? 30)));
$data = json_decode(@file_get_contents(__DIR__ . '/_stats/counts.json') ?: '[]', true) ?: [];
$from = gmdate('Y-m-d', time() + 3 * 3600 - ($days - 1) * 86400);
$pages = []; $byDay = []; $tot = ['view' => 0, 'whatsapp' => 0, 'call' => 0];
foreach ($data as $day => $paths) {
  if ($day < $from) continue;
  foreach ($paths as $p => $c) {
    foreach ($tot as $k => $_) {
      $n = (int)($c[$k] ?? 0);
      $pages[$p][$k] = ($pages[$p][$k] ?? 0) + $n;
      $byDay[$day][$k] = ($byDay[$day][$k] ?? 0) + $n;
      $tot[$k] += $n;
    }
  }
}
// Where visits came from (recorded from 23 Nov 2026)
$srcData = json_decode(@file_get_contents(__DIR__ . '/_stats/sources.json') ?: '[]', true) ?: [];
$names = ['facebook' => 'Facebook', 'instagram' => 'Instagram', 'google' => 'Google', 'other-search' => 'Other search engines', 'whatsapp' => 'WhatsApp (tagged links)', 'tiktok' => 'TikTok', 'x' => 'X (Twitter)', 'linkedin' => 'LinkedIn', 'other-site' => 'Other websites', 'direct' => 'Direct, WhatsApp chats or unknown'];
$src = [];
foreach ($srcData as $day => $byS) {
  if ($day < $from) continue;
  foreach ($byS as $s => $c) {
    foreach (['visit', 'whatsapp', 'call'] as $k) { $src[$s][$k] = ($src[$s][$k] ?? 0) + (int)($c[$k] ?? 0); }
    foreach (($c['pages'] ?? []) as $p => $n) { $src[$s]['pages'][$p] = ($src[$s]['pages'][$p] ?? 0) + (int)$n; }
  }
}
uasort($src, fn($a, $b) => ($b['visit'] ?? 0) <=> ($a['visit'] ?? 0));
uasort($pages, fn($a, $b) => (($b['whatsapp'] ?? 0) + ($b['call'] ?? 0)) <=> (($a['whatsapp'] ?? 0) + ($a['call'] ?? 0)) ?: ($b['view'] ?? 0) <=> ($a['view'] ?? 0));
krsort($byDay);
$h = fn($s) => htmlspecialchars((string)$s, ENT_QUOTES);
?><!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Redbay site counts</title>
<style>body{font-family:system-ui,sans-serif;margin:0;padding:24px 16px;color:#1d1f21;background:#fff;max-width:900px;margin:auto}h1{font-size:24px}table{width:100%;border-collapse:collapse;margin:12px 0 32px;font-size:15px}th,td{text-align:left;padding:8px 6px;border-bottom:1px solid #e6e6e3}td.n,th.n{text-align:right}.k{display:flex;gap:12px;flex-wrap:wrap}.k div{background:#f4f4f2;border-radius:14px;padding:14px 18px;min-width:120px}.k b{display:block;font-size:28px}a{color:#1d1f21}</style></head><body>
<h1>Website counts, last <?= $days ?> days</h1>
<p><a href="?days=7">7 days</a> · <a href="?days=30">30 days</a> · <a href="?days=90">90 days</a> · <a href="?days=365">1 year</a></p>
<div class="k"><div><b><?= $tot['view'] ?></b>Page views</div><div><b><?= $tot['whatsapp'] ?></b>WhatsApp taps</div><div><b><?= $tot['call'] ?></b>Call taps</div></div>
<h2>Where visitors came from</h2>
<?php if (!$src): ?><p>No source data yet. Recording started on 23 Nov 2026.</p><?php else: ?>
<table><tr><th>Source</th><th class="n">Visits</th><th class="n">WhatsApp</th><th class="n">Calls</th></tr>
<?php foreach ($src as $s => $c): $pg = $c['pages'] ?? []; arsort($pg); $top = array_slice($pg, 0, 5, true); ?><tr><td><b><?= $h($names[$s] ?? $s) ?></b><?php if ($top): ?><br><span style="color:#6b6e72;font-size:13px">Landed on: <?php $i = 0; foreach ($top as $p => $n): ?><?= $i++ ? ', ' : '' ?><?= $h($p) ?> (<?= (int)$n ?>)<?php endforeach; ?></span><?php endif; ?></td><td class="n"><?= (int)($c['visit'] ?? 0) ?></td><td class="n"><?= (int)($c['whatsapp'] ?? 0) ?></td><td class="n"><?= (int)($c['call'] ?? 0) ?></td></tr><?php endforeach; ?>
</table><?php endif; ?>
<p style="color:#6b6e72;font-size:14px;margin-top:-20px">A visit is one person arriving on the site; it may cover several pages. WhatsApp chats don't say where a link came from, so add <b>?src=wa</b> to links you share there (for example redbaygroup.co.ke/projects/?src=wa).</p>
<h2>By page</h2><table><tr><th>Page</th><th class="n">Views</th><th class="n">WhatsApp</th><th class="n">Calls</th></tr>
<?php foreach ($pages as $p => $c): ?><tr><td><a href="<?= $h($p) ?>"><?= $h($p) ?></a></td><td class="n"><?= (int)($c['view'] ?? 0) ?></td><td class="n"><?= (int)($c['whatsapp'] ?? 0) ?></td><td class="n"><?= (int)($c['call'] ?? 0) ?></td></tr><?php endforeach; ?>
</table><h2>By day</h2><table><tr><th>Day</th><th class="n">Views</th><th class="n">WhatsApp</th><th class="n">Calls</th></tr>
<?php foreach ($byDay as $d => $c): ?><tr><td><?= $h($d) ?></td><td class="n"><?= (int)($c['view'] ?? 0) ?></td><td class="n"><?= (int)($c['whatsapp'] ?? 0) ?></td><td class="n"><?= (int)($c['call'] ?? 0) ?></td></tr><?php endforeach; ?>
</table><p style="color:#6b6e72;font-size:14px">Counts only: no cookies, no IP addresses. Taps are counted when someone presses a WhatsApp or Call button; not every tap becomes a message.</p></body></html>
