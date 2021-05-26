// visuals that have nothing to do with calculating physics stuff

// global variables
	var errorMessage = "";

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
				errorMessage = "";
				var solution;

				if(answer == 'x0') {
					if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x = getValue("x0x2");
						var v0 = getValue("x0v02");
						var a = getValue("x0a2");
						var t = getValue("x0t2");

						// calculate answer
						solution = x - (v0 * t + 0.5 * a * Math.pow(t, 2));
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = getValue("x0x3");
						var v0 = getValue("x0v03");
						var a = getValue("x0a3");
						var v = getValue("x0v3");

						// calculate answer
						solution = -1 * (((Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * a)) - x);
					} else {
						errorMessage += answer + " " + equation + "something wrong\n";
					}

					// output the answer
					if(errorMessage.length != 0) {
						updateError('outputx0');
						return;
					}
					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputx0").innerHTML = solution;
				} else if (answer == 'x') {
					if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x0 = getValue("xx02");
						var v0 = getValue("xv02");
						var a = getValue("xa2");
						var t = getValue("xt2");

						// calculate answer
						solution = Number(x0) + v0 * t + 0.5 * a * Math.pow(t, 2); // why do i need to cast x0?
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x0 = getValue("xx03");
						var v0 = getValue("xv03");
						var a = getValue("xa3");
						var v = getValue("xv3");

						// calculate answer
						solution = ((Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * a)) + Number(x0); // why do I have to cast x0?
					} else {
						errorMessage += answer + " " + equation + "something wrong\n";
					}

					// output the answer
					if(errorMessage.length != 0) {
						updateError("outputx");
						return;
					}

					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputx").innerHTML = solution;
				} else if (answer == 'v0') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = getValue("v0v1");
						var a = getValue("v0a1");
						var t = getValue("v0t1");
						// calculate answer
						var solution = v - a * t;
					} else if(equation.localeCompare('E2') == 0) {
						// get variable values
						var x = getValue("v0x2");
						var x0 = getValue("v0x02");
						var a = getValue("v0a2");
						var t = getValue("v0t2");
						// calculate answer
						var solution = (x - x0 - 0.5 * a * Math.pow(t, 2)) / t;
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = getValue("v0x3");
						var x0 = getValue("v0x03");
						var a = getValue("v0a3");
						var v = getValue("v0v3");

						// calculate answer
						solution = Math.sqrt(Math.pow(v, 2) - 2 * a * (x - x0));
					} else {
						errorMessage += answer + " " + equation + "something wrong\n";
					}
					// output the answer
					if(errorMessage.length != 0) {
						updateError("outputv0");
						return;
					}

					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputv0").innerHTML = solution;
				} else if(answer == 'v') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v0 = getValue("vv01");
						var a = getValue("va1");
						var t = getValue("vt1");
						// calculate answer
						var solution = Number(v0) + (a * t); // idk why i need to cast here
					} else if (equation.localeCompare('E3') == 0) {
						// get variable values
						var x = getValue("vx3");
						var x0 = getValue("vx03");
						var a = getValue("va3");
						var v0 = getValue("vv03");

						// calculate answer
						solution = Math.sqrt(Math.pow(v0, 2) + 2 * a * (x - x0));
					} else {
						errorMessage += answer + " " + equation + "something wrong\n";
					}
					// output the answer
					if(errorMessage.length != 0) {
						updateError("outputv");
						return;
					}

					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputv").innerHTML = solution;
				} else if(answer == 'a') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = getValue("av1");
						var v0 = getValue("av01");
						var t = getValue("at1");

						// calculate answer
						solution = (v - v0) / t;
					} else if (equation.localeCompare('E2') == 0) {
						// get variable values
						var x = getValue("ax2");
						var x0 = getValue("ax02");
						var v0 = getValue("av02");
						var t = getValue("at2");

						// calculate answer
						solution = (x - x0 - (v0 * t)) / (0.5 * Math.pow(t, 2));
					} else if(equation.localeCompare('E3') == 0) {
						// get variable values
						var x = getValue("v0x3");
						var x0 = getValue("v0x03");
						var v0 = getValue("av03");
						var v = getValue("v0v3");

						// calculate answer
						solution = (Math.pow(v, 2) - Math.pow(v0, 2)) / (2 * (x - x0));
					} else {
						errorMessage += answer + " " + equation + "something wrong\n";
					}
					// output the answer
					if(errorMessage.length != 0) {
						updateError("outputa");
						return;
					}

					solution = Math.round(solution * 100) / 100;
					document.getElementById("outputa").innerHTML = solution;
				} else if(answer == 't') {
					if(equation.localeCompare('E1') == 0) {
						// get variable values
						var v = getValue("tv1");
						var v0 = getValue("tv01");
						var a = getValue("ta1");

						// calculate answer
						solution = (v - v0) / a;
						solution = Math.round(solution * 100) / 100;
					} else if (equation.localeCompare('E2') == 0) {
						// get variable values
						var x = getValue("tx2");
						var x0 = getValue("tx02");
						var v0 = getValue("tv02");
						var a = getValue("ta2");

						// calculate answer
						// won't work if t = imaginary number --> need error checking
						// error checking messages

						if(Math.pow(v0, 2) - (4 * (0.5 * a) * (x0 - x)) < 0) {
							errorMessage +=  "Calculated imaginary time, only real values accepted\n";
						}


						var op1 = ((-1 * v0) + Math.sqrt(Math.pow(v0, 2) - (4 * (0.5*a) * (x0 - x)))) / (2 * (0.5 * a)); // quadratic formula
						var op2 = ((-1 * v0) - Math.sqrt(Math.pow(v0, 2) - (4 * (0.5*a) * (x0 - x)))) / (2 * (0.5 * a)); // quadratic formula

						op1 = Math.round(op1 * 100) / 100;
						op2 = Math.round(op2 * 100) / 100;

						solution = op1 + ", " + op2;
					} else {
							errorMessage += answer + " " + equation + "something wrong\n";
					}

					// output the answer
					if(errorMessage.length != 0) {
						updateError("outputt");
						return;
					}

					document.getElementById("outputt").innerHTML = solution;
				} else {
					errorMessage += answer + " " + equation + "something wrong\n";
				}

				if(errorMessage.length == 0) {
					errorMessage = "None";
					updateError("");
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
					errorMessage += "No " + input.name + " input\n";
				} else {
					input = input.value;
				}

				return input;
			}

			function updateError(output) {
				if(output.length > 0) {
					document.getElementById(output).value = "?";
				}
				if(errorMessage.localeCompare("None") == 0) {
					document.getElementById("error").style.color = "black";
				} else {
					document.getElementById("error").style.color = "red";
				}
				document.getElementById("error").value = errorMessage;
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
