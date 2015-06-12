//OhScee 2015
//
//calendar class
//starting cal
//associated button
//ending cal
//associated button
var cal = function(strt, nd, startButt, endButt){
	var start = strt,
		startButton = startButt,
	    end = nd,
		endButton = endButt;

	var sdate = null,
		edate = null;

	this.bothSelected = false; //check to see if both calendars have dates selected

	var startSelect = null;
	function endDate(){
		return end.datepicker("getDate");
	}
	function startDate(){
		return start.datepicker("getDate");
	}
	start.datepicker({
		gotoCurrent: true,
		minDate: new Date(),
		onSelect(dateText){
			sdate = dateText;
			
			if(endDate() !== null){
				var fd = sdate.split("/");
				console.log(fd);
				var ed = edate.split("/");

				if(fd[2] > ed[2] || fd[0] > ed[0] || fd[1] > ed[1]){
					$.datepicker._clearDate(end);
				}
			}

			end.datepicker({
				gotoCurrent: true,
				minDate: sdate,
				onSelect(dt){
					edate = dt;
					this.bothSelected = true;
				}
			});

			endButton.click(function(){
				end.datepicker("show");
			});
		}
	});

	startButton.click(function(){
		start.datepicker("show");
	});


	//API
	//
	this.getStart = function(){
		return start.datepicker("getDate");
	}
	this.getEnd = function(){
		return end.datepicker("getDate");
	}
};