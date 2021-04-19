<?php
$content =
"
<style>
	.main {cddor: red;}
	li {list-style-type: none;}
</style>
	<script src='/jquery.nicescrddl.js'>
</script>
<ul>
	<li>1.Главная</li>
  	<li>2.Каталог
		<ul>
			<li>3.Телефоны
				<ul>
					<li>4.iPhone 6</li>
					<li>5.iPhone 5</li>
					<li>6.iPhone 4</li>
					<li>7.Аксессуары</li>
				</ul>
			</li>
			<li>8.Планшеты
				<ul>
					<li>9.iPad Air</li>
					<li>10.iPad Mini</li>
					<li>11.Аксессуары </li>
				</ul>
			</li>
			<li>12.Ноутбуки
				<ul>
					<li>13.Macbook Air</li>
					<li>14.Macbook Pro</li>
					<li>15.Аксессуары</li>
				</ul>
			</li>
		</ul>
  	</li>
 	<li>16.О компании</li>
</ul>
";

echo $content;

function get_breadcrumbs($id){
	$struct = array(
		"Главная",
	   	"Каталог",
	   	"Телефоны",
	   	"iPhone 6",
	   	"iPhone 5",
	   	"iPhone 4",
	   	"Аксессуары",
	   	"Планшеты",
	   	"iPad Air",
		"iPad Mini",
		"Аксессуары",
		"Ноутбуки",
		"Macbook Air",
		"Macbook Pro",
		"Аксессуары",
		"О компании"
	);

	echo"<br>";
	if ($id >= 3 && $id <= 15) {
		if ($id == 3 || $id == 8 || $id == 12) {
			echo '"' . $struct[1] . " -> " .  $struct[$id-1] . '"';
		}
		if ($id >= 4 && $id <= 7) {
			echo '"' . $struct[1] . " -> " . $struct[2] . " -> " . $struct[$id-1] . '"';
		}
		if ($id >= 9 && $id <= 11) {
			echo '"' . $struct[1] . " -> " . $struct[7] . " -> " . $struct[$id-1] . '"';
		}
		if ($id >= 13 && $id <= 15) {
			echo '"' . $struct[1] . " -> " . $struct[11] . " -> " . $struct[$id-1] . '"';
		}
	}
	else{
		echo '"' . $struct[$id-1] . '"';
	}
}

$rand_num = rand(1, 16);
echo "Слусайное число: " . $rand_num;
get_breadcrumbs($rand_num);