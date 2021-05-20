// visuals that have nothing to do with calculating physics stuff
			function openTab(evt, variable) {
			  var i, tabcontent, tablinks;
			  tabcontent = document.getElementsByClassName("tabcontent");
			  for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			  }
			  tablinks = document.getElementsByClassName("tablinks");
			  for (i = 0; i < tablinks.length; i++) {
				tablinks[i].className = tablinks[i].className.replace(" active", "");
			  }
			  document.getElementById(variable).style.display = "block";
			  evt.currentTarget.className += " active";
			}
			
			function showHide(show, hide) {		
				document.getElementById(hide.id).style.display = "none";
				document.getElementById(show.id).style.display = "inline";
			}
			
			// Actual Calculation stuff
			function calculate(answer, equation) {
				if(answer == 'x0') {
					if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x = document.getElementById("x0x2").value;
						var v0 = document.getElementById("x0v02").value;
						var a = document.getElementById("x0a2").value;
						var t = document.getElementById("x0t2").value;
							
						// calculate answer
						var solution = x - (v0 * t + 0.5 * a * Math.pow(t, 2));

						// output answer
						document.getElementById("output").value = solution;
					} else if (equation.localeCompare('E3') == 0) {
								
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
				} else if (answer == 'x') {
					if(equation.localeCompare('E2') == 0) {
						
					} else if(equation.localeCompare('E3') == 0) {
					
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
				} else if (answer == 'v0') {
					if(equation.localeCompare('E1') == 0) {
						
					} else if(equation.localeCompare('E2') == 0) {
						
					} else if(equation.localeCompare('E3') == 0) {
							
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
				} else if(answer == 'v') {
					if (equation.localeCompare('E1') == 0) {
					
					} else if (equation.localeCompare('E3') == 0) {
					
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
				} else if(answer == 'a') {
					if(equation.localeCompare('E1') == 0) {
					
					} else if (equation.localeCompare('E2') == 0) {
					
					} else if(equation.localeCompare('E3') == 0) {
						
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
				} else if(answer == 't') {
					if(equation.localeCompare('E1') == 0) {
					
					} else if (equation.localeCompare('E2') == 0) {
					
					} else {
							window.alert(answer + " " + equation + "something wrong");
					}
				} else {
					window.alert(answer + " " + equation + "something wrong");
				}
			}
			
			window.onload = function() {
				document.getElementById("numx2").value = '';
				document.getElementById("numv02").value = '';
				document.getElementById("numa2").value = '';
				document.getElementById("numt2").value = '';
			}