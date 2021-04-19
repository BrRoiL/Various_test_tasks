<?php
$array_list = array();

for ($i=0; $i < 10; $i++) {
	$array_list[$i] = rand(0, 100);
	echo $array_list[$i] . " ";
}

echo "<br>";
echo "<br>";
$max = 0;

for ($i=0; $i < 3; $i++) {
	for ($j=0; $j < 10; $j++) {
		if ($array_list[$j] > $max) {
			$max = $array_list[$j];
			$max_id = $j;
		}
	}
	echo $max . " ";
	$array_list[$max_id] = 0;
	$max = 0;
}
