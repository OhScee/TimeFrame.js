//OhScee 2015
//
//calendar class
//starting cal
//associated button
//ending cal
//associated button
var cal = function(strt, startButt, nd, endButt){
	var start = strt,
		startButton = startButt,
	    end = nd,
		endButton = endButt;

	this.bothSelected = false; //check to see if both calendars have dates selected

	var startSelect = null;

	start.datepicker({
		gotoCurrent: true,
		minDate: new Date(),

		onSelect(dateText){
			date = dateText;

			end.datepicker({
				gotoCurrent: true,
				minDate: date,
				onSelect(){
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