var array, array_url, marker, proceed;
array = [["br-icloud.com.brphishing"], ["mp3raid.com/music/krizz_kaliko.htmlbenign"], ["bopsecrets.org/rexroth/cr/1.htmbenign"], ["http://www.garage-pirenne.be/index.php?option=com_content&view=article&id=70&vsig70_0=15defacement"], ["http://adventure-nicaragua.net/index.php?option=com_mailto&tmpl=component&link=aHR0cDovL2FkdmVudHVyZS1uaWNhcmFndWEubmV0L2luZGV4LnBocD9vcHRpb249Y29tX2NvbnRlbnQmdmlldz1hcnRpY2xlJmlkPTQ3OmFib3V0JmNhdGlkPTM2OmRlbW8tYXJ0aWNsZXMmSXRlbWlkPTU0defacement"], ["http://buzzfil.net/m/show-art/ils-etaient-loin-de-s-imaginer-que-le-hibou-allait-faire-ceci-quand-ils-filmaient-2.htmlbenign"], ["espn.go.com/nba/player/_/id/3457/brandon-rushbenign"], ["yourbittorrent.com/?q=anthony-hamilton-soulifebenign"], ["http://www.pashminaonline.com/pure-pashminasdefacement"], ["allmusic.com/album/crazy-from-the-heat-r16990benign"], ["corporationwiki.com/Ohio/Columbus/frank-s-benson-P3333917.aspxbenign"], ["http://www.ikenmijnkunst.nl/index.php/exposities/exposities-2006defacement"], ["myspace.com/video/vid/30602581benign"], ["http://www.lebensmittel-ueberwachung.de/index.php/aktuelles.1defacement"], ["http://www.szabadmunkaero.hu/cimoldal.html?start=12defacement"], ["http://larcadelcarnevale.com/catalogo/palloncinidefacement"], ["quickfacts.census.gov/qfd/maps/iowa_map.htmlbenign"], ["nugget.ca/ArticleDisplay.aspx?archive=true&e=1160966benign"], ["uk.linkedin.com/pub/steve-rubenstein/8/718/755benign"], ["http://www.vnic.co/khach-hang.htmldefacement"], ["baseball-reference.com/players/h/harrige01.shtmlbenign"], ["signin.eby.de.zukruygxctzmmqi.civpro.co.zaphishing"], ["192.com/atoz/people/oakley/patrick/benign"], ["nytimes.com/1998/03/29/style/cuttings-oh-that-brazen-raucous-glorious-hibiscus.htmlbenign"], ["escholarship.org/uc/item/5xt4952cbenign"], ["songfacts.com/detail.php?id=13410benign"], ["casamanana.org/education/blba/benign"], ["http://hollywoodlife.com/2014/05/01/rihanna-iheartradio-music-awards-dress-2014-pics/benign"], ["http://www.marketingbyinternet.com/mo/e56508df639f6ce7d55c81ee3fcd5ba8/phishing"], ["en.wikipedia.org/wiki/North_Dakotabenign"], ["soaps.sheknows.com/daysofourlives/news/id/20259/Days_Of_Our_Lives_Casts_Ruta_Lee/benign"], ["perfectpeople.net/celebrity-star/6920/gidget-gein.htmbenign"], ["media.caltech.edu/press_releases/13186benign"], ["wikiobits.com/Obits/TonyProudfootbenign"], ["vanderbilt.rivals.com/viewcoach.asp?coach=2079&sport=1&year=2011benign"], ["http://peluqueriadeautor.com/index.php?option=com_virtuemart&page=shop.browse&category_id=31&Itemid=70defacement"], ["movies.yahoo.com/shop?d=hv&cf=info&id=1800340831benign"], ["cyndislist.com/us/pa/countiesbenign"], ["http://www.824555.com/app/member/SportOption.php?uid=guest&langx=gbmalware"], ["http://www.raci.it/component/user/reset.htmldefacement"], ["https://docs.google.com/spreadsheet/viewform?formkey=dGg2Z1lCUHlSdjllTVNRUW50TFIzSkE6MQphishing"], ["psychology.wikia.com/wiki/Phonemesbenign"], ["info.centriq.com/content/fivereasonsbenign"], ["articles.baltimoresun.com/1991-06-11/sports/1991162162_1_james-koehler-texas-rangers-terrell-lowerybenign"], ["infinitysw.com/benign"], ["strawberrycreekgardens.com/benign"], ["http://earth-sure.com/industrial-tech/everlast-impact-resistant-dumpster-enclosuredefacement"], ["spoke.com/dir/p/desantis/nickbenign"], ["wordsmith.org/words/pignus.htmlbenign"]];
array_url = [];
marker = "N/A";
proceed = "No";

for (var i, _pj_c = 0, _pj_a = array, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
  i = _pj_a[_pj_c];

  if (i[0] === url) {
    marker = i[1];
  }
}

if (marker !== "N/A") {
  console.log(`You tried to go to ${url}, and this website is noted as ${marker}, do you want to proceed?
Yes / No ...`);
} else {
  console.log("This link is safe, continue ...");
}

if (proceed === "Y" || proceed === "y" || proceed === "Yes" || proceed === "YES") {
  console.log(`Connecting to ${url} ...`);
} else {
  console.log(`Going back to safety ...`);
}
