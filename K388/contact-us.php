<html>
  <head>
    <title>K388 Holdings</title>
    <link rel="stylesheet" type="text/css" href="css/indexstyle.css?v=<?=rand(0,9999999)?>" />
    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="js/indexjs.js?v=<?=rand(0,9999999)?>"></script>

    <meta charset="UTF-8">
    <meta name="description" content="K388 Holdings">
    <meta name="keywords" content="k388 holdings, contact">
    <meta name="author" content="BigTK Inc">

    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?v=2" />
    <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon">

    <link rel="shortcut icon" type="image/png" href="/favicon.png?v=2"/>
    <link rel="shortcut icon" type="image/png" href="http://k388holdings.com/favicon.png?v=2"/>
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    
  </head>
  
  <body>
    <div id="container">

      <?php require_once("template/topnav.php"); ?>
      <?php require_once("template/top.php"); ?>
    <div id="poison">
    <div id="content">
      <div id="poison-etc">

      <center>
        <?php
          if (isset($_POST['submit'])){
          
              //Email information
              $admin_email = "chloesbtk@gmail.com";
              $email = "From: " . $_REQUEST['email'] . "\r\n";
              $email .= "Reply-To: " . $_REQUEST['email'] . "\r\n";
              $email .= "Return-Path: " . $_REQUEST['email'] . "\r\n";
              $email .= "CC: " . $_REQUEST['email'] . "\r\n";
              $email .= "BCC: " . $_REQUEST['email'] . "\r\n";
              // $headers = "From: myplace@example.com\r\n";
              // $headers .= "Reply-To: myplace2@example.com\r\n";
              // $headers .= "Return-Path: myplace@example.com\r\n";
              // $headers .= "CC: sombodyelse@example.com\r\n";
              // $headers .= "BCC: hidden@example.com\r\n";
              $subject = $_REQUEST['subject'];
              $comment = $_REQUEST['comment'];
              
              if ($_REQUEST['email'] == "" || $subject == "" || $comment == "") {
                echo "<script type='text/javascript'>alert('Please fill out all data.'); window.location = 'contact-us.php';</script>";
              }
              else if(!filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)){
                echo "<script type='text/javascript'>alert('Invalid email.'); window.location = 'contact-us.php';</script>";
              }
              else{
                //send email
                mail($admin_email, "$subject", $comment, $email);
                
                //Email response
                echo "<h1>Thank you for contacting us!</h1>
                      <a href='index.php'><input type='button' value='Back to Home' class='form-btn' /></a>
                ";
              }
          }
          
          else{
        ?>

              <form id="contact-form" method="post">
                <h1>CONTACT US</h1><br><br>

                Email: <input name="email" type="text" /><br><br>
                Subject: <input name="subject" type="text" /><br><br>
                <span style="letter-spacing: 1;">Message:<br><br>
                <textarea name="comment" rows="15" cols="40"></textarea><br />
                <input type="submit" value="Submit" name="submit" class="form-btn" />
                <a href="index.php"><input type="button" value="Back to Home" class="form-btn" /></a>
              </form>
          
          <?php
          }
          ?>
        </center>
      </div>
    </div>
    </div>

      <?php require_once("template/footer.php"); ?>
      
    </div>
  </body>


</html>