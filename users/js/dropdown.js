
	$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });



    function navbar_movment(event)
	{
        	$(event.data.param1).slideToggle("fast");
        /*	$(event.data.param2).slideUp("fast");
        	$(event.data.param3).slideUp("fast");
        	$(event.data.param4).slideUp("fast"); */
	};


$("#m1").click({param1:"#sub1",param2:"#sub2",param3:"#sub3",param4:"#sub4"},navbar_movment);
$("#m2").click({param1:"#sub2",param2:"#sub1",param3:"#sub3",param4:"#sub4"},navbar_movment);
$("#m3").click({param1:"#sub3",param2:"#sub1",param3:"#sub2",param4:"#sub4"},navbar_movment);
$("#m4").click({param1:"#sub4",param2:"#sub1",param3:"#sub2",param4:"#sub3"},navbar_movment);
