$(document).ready(function() {
			/*Agrega productos*/
			$(".btn-add").click(function(e) {
				var pr_n = $(".prod-number");
				var current_val = pr_n.val();
				var increment = parseInt(current_val)+1;
				pr_n.val("");
				pr_n.val(increment);

			});

			/*Resta productos*/
			$(".btn-remove").click(function(e) {
				var pr_n = $(".prod-number");
				var current_val = pr_n.val();
				var remove;

				if( current_val>1 ) {
					remove = parseInt(current_val)-1;
					pr_n.val("");
					pr_n.val(remove);
				}
			});

			/*Star rating*/
            $('#rate-product').barrating({
                theme: 'fontawesome-stars-o',
                initialRating: 4
            });
            for (var i = 1; i <= 3; i++) {
			    $("#rate-product-in"+i).barrating({
			    theme: 'fontawesome-stars-o',
			    initialRating: 4,
			    readonly: true
			    });
			  }
		});