<?php
function mac(){
  
  $check_mac = "24-EC-99-8F-15-25";

  ob_start();
  system('ipconfig/all');
  $mycom = ob_get_contents();
  ob_clean();

  $findme = "Physical";
  $pmac = strpos($mycom, $findme);
  $mac= substr($mycom, ($pmac+36),17);
  echo "MAC ADDRESS = {$mac}";
  echo "
";

  if($check_mac == $mac){
    echo "MAC CONNECTED";
  }else{
    echo "MAC NOT CONNECTED";
  }

}

mac();
