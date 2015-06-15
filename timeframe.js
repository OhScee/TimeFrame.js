//OhScee 2015
//
//calendar class
//starting cal
//associated button
//ending cal
//associated button
var cal = function(strt, nd, min, startButt, endButt){
	var calendar = this; //current object
	var start = strt,
		startButton = startButt,
	    end = nd,
		endButton = endButt,
		minimum = min;

	if(endButt === undefined){
		startButton = min;
		endButton = startButt;
		minimum = 0;
	}
	if(min === undefined)
		minimum = 0;

	var sdate = null,
		edate = null;

	var minStart = null;

	this.firstSelected = false;
	this.bothSelected = false; //check to see if both calendars have dates selected
							   //you can set an external listener onto the related input  fields and buttons
	var startSelect = null;
	function endDate(){
		return end.datepicker("getDate");
	}
	function startDate(){
		return start.datepicker("getDate");
	}
	start.datepicker({
		gotoCurrent: true,
		minDate: minimum,
		onSelect: function(dateText){
			sdate = dateText;
			calendar.firstSelected = true;
			if(endDate() !== null){
				console.log(endDate());
				var fd = sdate.split("/");
				var ed = edate.split("/");

				if(fd[2] > ed[2] || fd[0] > ed[0] || fd[1] > ed[1]){
					$.datepicker._clearDate(end);
				}
			}

			end.datepicker({
				gotoCurrent: true,
				minDate: sdate,
				onSelect: function(dt){
					edate = dt;
					calendar.bothSelected = true;
				}
			});

			if(endButton !== undefined){
				endButton.click(function(){
					end.datepicker("show");
				});
			}
		}
	});

	if(startButton !== undefined){
		startButton.click(function(){
			start.datepicker("show");
		});
	}


	//API
	//
	this.getStart = function(){
		return start.datepicker("getDate");
	}
	this.getEnd = function(){
		return end.datepicker("getDate");
	}
};