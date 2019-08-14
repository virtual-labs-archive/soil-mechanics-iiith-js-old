	function start(){
        document.getElementById("playb").style.display = "none";
        document.getElementById("pauseb").style.display = "none";
        document.getElementById("resumeb").style.display = "none";
        document.getElementById("stopb").style.display = "none";

    }


    function picture(){ 
        document.getElementById("playb").style.display = "block";
        document.getElementById("foo").style.display = "none";

        var pic = "second.png";
        document.getElementById("first").src = pic.replace();
    }


    //ANIMATION (SLIDESHOW)
    var i = 0, imgsrc = new Array(), preload = new Array();

    // IMAGES FOR SLIDESHOW
    imgsrc[0]="animation/1.png";
    imgsrc[1]="animation/2.png";
    imgsrc[2]="animation/3.png";
    imgsrc[3]="animation/4.png";
    imgsrc[4]="animation/5.png";
    imgsrc[5]="animation/6.png";
    imgsrc[6]="animation/7.png";
    imgsrc[7]="animation/8.png";
    imgsrc[8]="animation/9.png";
    imgsrc[9]="animation/10.png";
    imgsrc[10]="animation/11.png";
    imgsrc[11]="animation/12.png";
    imgsrc[12]="animation/13.png";
    imgsrc[13]="animation/14.png";
    imgsrc[14]="animation/15.png";
    imgsrc[15]="animation/16.png";
    imgsrc[16]="animation/17.png";
    imgsrc[17]="animation/18.png";
    imgsrc[18]="animation/19.png";
    imgsrc[19]="animation/20.png";
    imgsrc[20]="animation/21.png";
    imgsrc[21]="animation/22.png";
    imgsrc[22]="animation/23.png";
    imgsrc[23]="animation/24.png";
    imgsrc[24]="animation/25.png";
    imgsrc[25]="animation/26.png";
    imgsrc[26]="animation/27.png";
    imgsrc[27]="animation/28.png";
    imgsrc[28]="animation/29.png";
    imgsrc[29]="animation/30.png";
    imgsrc[30]="animation/31.png";
    imgsrc[31]="animation/32.png";
    imgsrc[32]="animation/33.png";
    imgsrc[33]="animation/34.png";
    imgsrc[34]="animation/35.png";
    imgsrc[35]="animation/36.png";
    imgsrc[36]="animation/37.png";
    imgsrc[37]="animation/38.png";
    imgsrc[38]="animation/39.png";
    imgsrc[39]="animation/40.png";
    imgsrc[40]="animation/41.png";
    imgsrc[41]="animation/42.png";
    imgsrc[42]="animation/43.png";
    imgsrc[43]="animation/44.png";
    imgsrc[44]="animation/45.png";
    imgsrc[45]="animation/46.png";
    imgsrc[46]="animation/47.png";
    imgsrc[47]="animation/48.png";
    imgsrc[48]="animation/49.png";
    imgsrc[49]="animation/50.png";
    imgsrc[50]="animation/51.png";
    imgsrc[51]="animation/52.png";
    imgsrc[52]="animation/53.png";
    imgsrc[53]="animation/54.png";
    imgsrc[54]="animation/55.png";
    imgsrc[55]="animation/56.png";
    imgsrc[56]="animation/57.png";
    imgsrc[57]="animation/58.png";
    imgsrc[58]="animation/59.png";
    imgsrc[59]="animation/60.png";
    imgsrc[60]="animation/61.png";
    imgsrc[61]="animation/62.png";
    imgsrc[62]="animation/63.png";
    imgsrc[63]="animation/64.png";
    imgsrc[64]="animation/65.png";
    imgsrc[65]="animation/66.png";
    imgsrc[66]="animation/67.png";
    imgsrc[67]="animation/68.png";
    imgsrc[68]="animation/69.png";
    imgsrc[69]="animation/70.png";
    imgsrc[70]="animation/71.png";
    imgsrc[71]="animation/72.png";
    imgsrc[72]="animation/73.png";
    imgsrc[73]="animation/74.png";
    imgsrc[74]="animation/75.png";
    imgsrc[75]="animation/76.png";
    imgsrc[76]="animation/77.png";
    imgsrc[77]="animation/78.png";
    imgsrc[78]="animation/79.png";
    imgsrc[79]="animation/80.png";
    imgsrc[80]="animation/81.png";
    imgsrc[81]="animation/82.png";
    imgsrc[82]="animation/83.png";
    imgsrc[83]="animation/84.png";
    imgsrc[84]="animation/85.png";
    imgsrc[85]="animation/86.png";
    imgsrc[86]="animation/87.png";
    imgsrc[87]="animation/88.png";
    imgsrc[88]="animation/89.png";
    imgsrc[89]="animation/90.png";
    imgsrc[90]="animation/91.png";
    imgsrc[91]="animation/92.png";
    imgsrc[92]="animation/93.png";
    imgsrc[93]="animation/94.png";
    imgsrc[94]="animation/95.png";
    imgsrc[95]="animation/96.png";
    imgsrc[96]="animation/97.png";
    imgsrc[97]="animation/98.png";
    imgsrc[98]="animation/99.png";
    imgsrc[99]="animation/100.png";
    imgsrc[100]="animation/101.png";
    imgsrc[101]="animation/102.png";
    imgsrc[102]="animation/103.png";
    imgsrc[103]="animation/104.png";
    imgsrc[104]="animation/105.png";
    imgsrc[105]="animation/106.png";
    imgsrc[106]="animation/107.png";
    imgsrc[107]="animation/108.png";
    imgsrc[108]="animation/109.png";
    imgsrc[109]="animation/110.png";
    imgsrc[110]="animation/111.png";
    imgsrc[111]="animation/112.png";
    imgsrc[112]="animation/113.png";
    imgsrc[113]="animation/114.png";
    imgsrc[114]="animation/115.png";
    imgsrc[115]="animation/116.png";
    imgsrc[116]="animation/117.png";
    imgsrc[117]="animation/118.png";
    imgsrc[118]="animation/119.png";
    imgsrc[119]="animation/120.png";
    imgsrc[120]="animation/121.png";
    imgsrc[121]="animation/122.png";
    imgsrc[122]="animation/123.png";
    imgsrc[123]="animation/124.png";
    imgsrc[124]="animation/125.png";
    imgsrc[125]="animation/126.png";
    imgsrc[126]="animation/127.png";
    imgsrc[127]="animation/128.png";
    imgsrc[128]="animation/129.png";
    imgsrc[129]="animation/130.png";
    imgsrc[130]="animation/131.png";
    imgsrc[131]="animation/132.png";
    imgsrc[132]="animation/133.png";
    imgsrc[133]="animation/134.png";
    imgsrc[134]="animation/135.png";
    imgsrc[135]="animation/136.png";
    imgsrc[136]="animation/137.png";
    imgsrc[137]="animation/138.png";
    imgsrc[138]="animation/139.png";
    imgsrc[139]="animation/140.png";
    imgsrc[140]="animation/141.png";
    imgsrc[141]="animation/142.png";
    imgsrc[142]="animation/143.png";
    imgsrc[143]="animation/144.png";
    imgsrc[144]="animation/145.png";
    imgsrc[145]="animation/146.png";
    imgsrc[146]="animation/147.png";
    imgsrc[147]="animation/148.png";
    imgsrc[148]="animation/149.png";
    imgsrc[149]="animation/150.png";
    imgsrc[150]="animation/151.png";
    imgsrc[151]="animation/152.png";
    imgsrc[152]="animation/153.png";
    imgsrc[153]="animation/154.png";
    imgsrc[154]="animation/155.png";
    imgsrc[155]="animation/156.png";
    imgsrc[156]="animation/157.png";
    imgsrc[157]="animation/158.png";
    imgsrc[158]="animation/159.png";
    imgsrc[159]="animation/160.png";
    imgsrc[160]="animation/161.png";
    imgsrc[161]="animation/162.png";
    imgsrc[162]="animation/163.png";
    imgsrc[163]="animation/164.png";
    imgsrc[164]="animation/165.png";
    imgsrc[165]="animation/166.png";
    imgsrc[166]="animation/167.png";
    imgsrc[167]="animation/168.png";
    imgsrc[168]="animation/169.png";
    imgsrc[169]="animation/170.png";
    imgsrc[170]="animation/171.png";
    imgsrc[171]="animation/172.png";
    imgsrc[172]="animation/173.png";
    imgsrc[173]="animation/174.png";
    imgsrc[174]="animation/175.png";
    imgsrc[175]="animation/176.png";
    imgsrc[176]="animation/177.png";
    imgsrc[177]="animation/178.png";
    imgsrc[178]="animation/179.png";
    imgsrc[179]="animation/180.png";


    for (var j=0;j<imgsrc.length;j++)
    {
        preload[j] = new Image;
        preload[j].src = imgsrc[j];
    }
  
    function mode(param)
    {
        smode=param;
    }

    function startSlideshow()
    {

        

        if(smode==="play")
        {
            document.getElementById("pauseb").style.display = "block";
            document.getElementById("stopb").style.display = "block";
            document.getElementById("resumeb").style.display = "none";
            document.getElementById("playb").style.display = "none";
            
            document.getElementById("playb").disabled="disabled";
            document.getElementById("pauseb").disabled="";
            document.getElementById("stopb").disabled="";

            document.getElementById("first").src=imgsrc[i];
            i++;
            setTimeout("startSlideshow()",90);
        }
        else if (smode==="pause")
        {

          document.getElementById("resumeb").style.display = "block";
          document.getElementById("pauseb").style.display = "none";
          document.getElementById("playb").style.display = "none";

          document.getElementById("pauseb").disabled="";
          document.getElementById("resumeb").disabled="";
          document.getElementById("stopb").disabled="";

        }
        else if(smode==="stop")
        {
            document.getElementById("resumeb").style.display = "none";
            document.getElementById("stopb").style.display = "none";
            document.getElementById("pauseb").style.display = "none";
            document.getElementById("playb").style.display = "block";
            
            document.getElementById("playb").disabled="";
            document.getElementById("pauseb").disabled="disabled";
            document.getElementById("stopb").disabled="";

            if (i==imgsrc.length)
            {
				document.getElementById("first").src=imgsrc[179];   
				i=0;
            }
            else
            {
				document.getElementById("first").src=imgsrc[0];
				i=0;
            }
        }

        if(i==imgsrc.length)
        {
            smode = "stop";
            
        }
    }