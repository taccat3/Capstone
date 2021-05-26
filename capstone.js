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
				document.getElementById(show.id).style.display = "inline";
				document.getElementById(hide.id).style.display = "none";
				reset();
			}

			// Actual Calculation stuff
			function calculate(answer, equation) {
				var solution;

				if(answer == 'x0') {
					if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x = getValue("x0x2");
						var v0 = document.getElementById("x0v02").value;
						var a = document.getElementById("x0a2").value;
						var t = document.getElementById("x0t2").value;

						// calculate answer
						solution = x - (v0 * t + Number(0.5 * a * Math.pow(t, 2)));
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = document.getElementById("x0x3").value;
						var v0 = document.getElementById("x0v03").value;
						var a = document.getElementById("x0a3").value;
						var v = document.getElementById("x0v3").value;

						// calculate answer
						solution = -1 * (((Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * a)) - x);
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}

					// output the answer
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputx0").innerHTML = solution;
				} else if (answer == 'x') {
					if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x0 = document.getElementById("xx02").value;
						var v0 = document.getElementById("xv02").value;
						var a = document.getElementById("xa2").value;
						var t = document.getElementById("xt2").value;

						// calculate answer
						solution = Number(x0) + v0 * t + 0.5 * a * Math.pow(t, 2); // why do i need to cast x0?
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x0 = document.getElementById("xx03").value;
						var v0 = document.getElementById("xv03").value;
						var a = document.getElementById("xa3").value;
						var v = document.getElementById("xv3").value;

						// calculate answer
						solution = ((Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * a)) + Number(x0); // why do I have to cast x0?
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}

					// output the answer
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputx").innerHTML = solution;
				} else if (answer == 'v0') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = document.getElementById("v0v1").value;
						var a = document.getElementById("v0a1").value;
						var t = document.getElementById("v0t1").value;
						// calculate answer
						var solution = v - a * t;
					} else if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x = document.getElementById("v0x2").value;
						var x0 = document.getElementById("v0x02").value;
						var a = document.getElementById("v0a2").value;
						var t = document.getElementById("v0t2").value;
						// calculate answer
						var solution = (x - x0 - 0.5 * a * Math.pow(t, 2)) / t;
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = document.getElementById("v0x3").value;
						var x0 = document.getElementById("v0x03").value;
						var a = document.getElementById("v0a3").value;
						var v = document.getElementById("v0v3").value;

						// calculate answer
						solution = Math.sqrt(Math.pow(v, 2) - 2 * a * (x - x0));
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
					// output the answer
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputv0").innerHTML = solution;
				} else if(answer == 'v') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v0 = document.getElementById("vv01").value;
						var a = document.getElementById("va1").value;
						var t = document.getElementById("vt1").value;
						// calculate answer
						var solution = Number(v0) + (a * t); // idk why i need to cast here
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = document.getElementById("vx3").value;
						var x0 = document.getElementById("vx03").value;
						var a = document.getElementById("va3").value;
						var v0 = document.getElementById("vv03").value;

						// calculate answer
						solution = Math.sqrt(Math.pow(v0, 2) + 2 * a * (x - x0));
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
					// output the answer
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputv").innerHTML = solution;
				} else if(answer == 'a') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = document.getElementById("av1").value;
						var v0 = document.getElementById("av01").value;
						var t = document.getElementById("at1").value;

						// calculate answer
						solution = (v - v0) / t;
					} else if (equation.localeCompare('E2') == 0) {
						// get variable values
						var x = document.getElementById("ax2").value;
						var x0 = document.getElementById("ax02").value;
						var v0 = document.getElementById("av02").value;
						var t = document.getElementById("at2").value;

						// calculate answer
						solution = (x - x0 - (v0 * t)) / (0.5 * Math.pow(t, 2));
					} else if(equation.localeCompare('E3') == 0) {
						// get variable values
						var x = document.getElementById("v0x3").value;
						var x0 = document.getElementById("v0x03").value;
						var v0 = document.getElementById("av03").value;
						var v = document.getElementById("v0v3").value;

						// calculate answer
						solution = (Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * (x - x0));
					} else {
						window.alert(answer + " " + equation + "something wrong");
					}
					// output the answer
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputa").innerHTML = solution;
				} else if(answer == 't') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = document.getElementById("tv1").value;
						var v0 = document.getElementById("tv01").value;
						var a = document.getElementById("ta1").value;

						// calculate answer
						solution = (v - v0) / a;
						solution = Math.round(solution * 100) / 100;
					} else if (equation.localeCompare('E2') == 0) {
						// get variable values
						var x = document.getElementById("tx2").value;
						var x0 = document.getElementById("tx02").value;
						var v0 = document.getElementById("tv02").value;
						var a = document.getElementById("ta2").value;

						// calculate answer
						// won't work if t = imaginary number --> need error checking
						if(Math.pow(v0, 2) - (4 * (0.5 * a) * (x0 - x)) < 0) {
						  window.alert("Calculated imaginary time, only real values accepted");
							return;
						}
						var op1 = ((-1 * v0) + Math.sqrt(Math.pow(v0, 2) - (4 * (0.5*a) * (x0 - x)))) / (2 * (0.5 * a)); // quadratic formula
						var op2 = ((-1 * v0) - Math.sqrt(Math.pow(v0, 2) - (4 * (0.5*a) * (x0 - x)))) / (2 * (0.5 * a)); // quadratic formula

						op1 = Math.round(op1 * 100) / 100;
						op2 = Math.round(op2 * 100) / 100;

						solution = op1 + ", " + op2;
					} else {
							window.alert(answer + " " + equation + "something wrong");
					}

					// output the answer
					document.getElementById("outputt").innerHTML = solution;
				} else {
					window.alert(answer + " " + equation + "something wrong");
				}
			}

			function makeButton() {
				var btn = document.createElement("button");
				btn.id = "eq1v0";
				// btn.onclick = "showHide(v0Eq1, btnv0)";
				btn.value = "v = v0 + at";
				btn.style.display = "inline";
				document.head.appendChild(btn);
			}

			function getValue(box) {
				var input = document.getElementById(box);
				if(isEmpty(input)) {
					alert("No " + input.id + " input");
				} else {
					x = x.value;
				}

				return input;
			}

			function isEmpty(box) {
				if(box.value.length == 0) {
					return true;
				} else {
					return false;
				}
			}

			// This doesn't work but honestly I just don't care
			function reset() {
				document.getElementById("numx2").setAttribute('value', 0);
				document.getElementById("numv02").setAttribute('value', 0);
				document.getElementById("numa2").setAttribute('value', 0);
				document.getElementById("numt2").setAttribute('value', 0);
				document.getElementById("numx2").setAttribute('value', 0);
				document.getElementById("output").innerHTML = "?";
			}

			window.onload = function() {
				makeButton();
				reset();
			}
