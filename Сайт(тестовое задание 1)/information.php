<?php
function get_wiki_url($title)
{
  //устанавливаем соединение через сокет
  $fp = fsockopen("ru.wikipedia.org", 80, $errno, $errstr, 30);
  if (!$fp) {
    echo "$errstr ($errno)<br />\n";
  } else {
    $out = "GET /w/api.php?action=opensearch&search=".urlencode($title)."& prop=info&format=xml&inprop=url HTTP/1.1\r\n";
    $out .= "Host: ru.wikipedia.org\r\n";
    // указывает User-Agent. Без него будет ошибка
    $out .= "User-Agent: MyCuteBot/0.1\r\n";
    $out .= "Connection: Close\r\n\r\n";
    fwrite($fp, $out);
    $str = '';
    // получает только xml без полученных заголовков сервера
    while (!feof($fp)) {
      $tmp_str = fgets($fp, 128);
      if ($str != '' || substr($tmp_str,0,2)=='<?')
        $str .= $tmp_str;
    }
    fclose($fp);
    //парсим строку
    $xml = simplexml_load_string($str);
    return $xml->Section->Item;
  }
}
$title = "https://ru.wikipedia.org/wiki/Мастер_и_Маргарита"
$pages_data = get_wiki_url("Мастер и Маргарита");
echo $pages_data . "1";