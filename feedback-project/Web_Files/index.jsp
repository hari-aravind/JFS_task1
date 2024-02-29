<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Feedback Form Project</title>
  <link href="./style.css" type="text/css" rel="stylesheet" />
</head>
<body>

<div class="wrapper">
  <h2>Feedback Form</h2>
  <div id="error_message"></div>
  <form action="Feedback" method="post">
    <div class="input_field">
        <input type="text" placeholder="Your Name" id="yname">
    </div>
    <div class="input_field">
        <input type="text" placeholder="Book Name" id="phone">
    </div>
    <div class="input_field">
        <textarea placeholder="Your Feedback" id="yourfeedback"></textarea>
    </div>
    <div class="btn">
        <input type="submit">
    </div>
  </form>
</div>

</body>
</html>