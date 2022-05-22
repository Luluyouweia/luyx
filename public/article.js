        var boolShowIn=0;
        var change=document.getElementById("srcForArticle");
        var $change=change.innerHTML;
        var url=new Array();
        var inName=new Array();
        
        change.innerHTML="<h2>往期内容</h2>";
            inName=["百度","这些只是测试文件","哈哈","。。。","5","ID6","ID7"]
            url=["https://www.baidu.com","#","about:blank;","#in_more","./luyx.html","#","#","#"]
            
        function getIn(){
            if(boolShowIn==1){
                i=url.length-1;
                change.innerHTML="<h2>往期内容</h2>";
                set=1;
                boolShowIn=2;
            }
            for(var i=url.length-1;i>=0;--i){
                change.innerHTML=change.innerHTML+"<a href='"+url[i]+"'>"+inName[i]+"</a>";
                if(boolShowIn==0){
                    if(i==url.length-2){
                        return change.innerHTML+="<div id='in_more'>查看更多</div>";
                    }
                }
            }
        }
        getIn();

        document.getElementById("in_more").onclick=function(){
            boolShowIn=1;
            change.style.height=url.length*30+35+"px";
            getIn();
        };
        
