//Creates bookmarks in adobe acrobat pro dc
var aBkMkNames = ["TOC",["Tax Forms","1040"],["Schedules","Schedule A"],["Wages & Tips","W2-Work"],["Interest & Dividends","Bank W9","Stocks W9"],"Receipts"];
var pageNumbers = [1,2,3,4,5,6,7,8,9,10,11];
var pageIndex = -1;


function SetPageNumbers()
{
   //start = -1;
   base = "this.pageNum=";
   //app.alert(String(base+pageNumbers[index]));
   //pageIndex = pageIndex + 1;
   return String(base+pageNumbers[pageIndex++]);
}

function MakeBkMks(oBkMkParent, aBkMks)
{
   //startPage = 0;
   for(var i=0;i<aBkMks.length;i++)
   {
      if(typeof(aBkMks[i]) == "string")
	  {
          oBkMkParent.createChild({cName:aBkMks[i], nIndex:i, cExpr:SetPageNumbers()});
		  //startPage++;
	  }
      else
      {// Assume this is a sub Array
         oBkMkParent.createChild({cName:aBkMks[i][0], nIndex:i, cExpr:SetPageNumbers()});
         MakeBkMks(oBkMkParent.children[i], aBkMks[i].slice(1) );
		 //startPage++;
      }
   }
}

// Create the Bookmarks
MakeBkMks(this.bookmarkRoot, aBkMkNames)


