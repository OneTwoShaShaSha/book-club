<!DOCTYPE html>
<html>
<head>
    <title>Book Club, IIT Kanpur</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="./styles.css">
   <link href="https://fonts.googleapis.com/css?family=Dancing+Script|EB+Garamond|Merriweather" rel="stylesheet"> 
</head>
<body>

    <header class="masthead" style="margin: 0px">
    <div class="jumbotron">
         <div class="container">
           <img src="./logo.png" id="iitk"></img>
             Book Club, IIT Kanpur
         </div>
    </div>
    </header>
    
    <div class="navbar navbar-custom navbar-inverse navbar-static-top" id="nav">
    <div class="container nv">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav nav-justified">
          <li><a href="./index.html">Home</a></li>
          <li><a href="./rules.html">Rules</a></li>
          <li class="active"><a href="./request.html">Request a Book</a></li>
          <li><a href="./events.html">Events</a></li>
          <li><a href="./contact.html">Contact Us</a></li>
            </ul>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container -->
</div><!--/.navbar -->

<div class="container content">
  <div class="row">
    <div class="col-xs-12 col-sm-4 col-sm-push-8">
      <div class="input-group">
        <div class="input-group-btn search-panel">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                <span id="search_concept">Filter by</span> <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#title">Title</a></li>
                <li><a href="#author">Author</a></li>
                <li><a href="#genre">Genre</a></li>
            </ul>
        </div>
        <input type="hidden" name="search_param" value="all" id="search_param">         
        <input type="text" class="form-control" id="query" placeholder="Search term...">
        <span class="input-group-btn">
            <button class="btn btn-default" type="submit" id="search-btn"><span class="glyphicon glyphicon-search"></span></button>
        </span>
    </div>
    </div>

<div class="col-xs-12 col-sm-8 col-sm-pull-4">
  <div class="col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        Request a Book
      </div>
      <div class="panel-body">
        If you couldn't find the book you were looking for with us, fill up the form below. We promise to do the best we can to procure it for you.
        <br> <span style="font-size: 0.8em; color:darkred">*Required fields</span>
        <br>
        <form action="request.php" method="post">
          <div class="form-group">
            <label for="userName">Your name: <span style="color:darkred">*</span></label>
            <input type="text" class="form-control" name="userName" required>
          </div>
          <div class="form-group">
            <label for="rollNo">Roll No.: <span style="color:darkred">*</span></label>
            <input type="text" class="form-control" name="rollNo" required>
          </div>
          <div class="form-group">
            <label for="emailID">IITK email ID: <span style="color:darkred">*</span></label>
            <input type="email" class="form-control" name="emailID" required>
          </div>
          <div class="form-group">
            <label for="bookName">Name of the book: <span style="color:darkred">*</span></label>
            <input type="text" class="form-control" name="bookName" required>
          </div>
          <div class="form-group">
            <label for="authorName">Name of the author: <span style="color:darkred">*</span></label>
            <input type="text" class="form-control" name="authorName" required>
          </div>
          <div class="form-group">
            <label for="additional">Additional details: </label>
            <textarea type="text" class="form-control" rows="3" name="additional"></textarea>
          </div>
          <div class="checkbox">
            <label for="verify"><input type="checkbox" style="vertical-align: top" name="verify">Have you checked our catalogue for the book?</label>
          </div>
          <button type="submit" class="btn btn-primary" name="submit">Request</button>
          <?php
      $user = $_POST['userName'];
      $roll = $_POST['rollNo'];
      $email = $_POST['emailID'];
      $book = $_POST['bookName'];
      $author = $_POST['authorName'];
      $add = $_POST['additional'];
      $ver = $_POST['verify'];
      $from = 'From: $userName (via the Gymkhana Library Website)'; 
      $to = 'onetwoshashasha@gmail.com'; 
      $subject = 'Request for addition of new book to library';

      $body = "From: $user\n Roll no.: $roll\nE-Mail: $email\n Book Name: $book\nAuthor Name: $author\nAdditional notes: $add\nChecked catalogue? $ver";

      if ($_POST['submit'])
      {
          if (mail ($to, $subject, $body, $from)) { 
	          echo '<p>Your request has been sent. Thank you!</p>';
	        } else { 
	          echo '<p>Something went wrong, please try again.</p>'; 
	        } 
      }
    ?>
        </form>
      </div>
    </div>
  </div>
</div>
</div>
</div>

<div class="row quote">
  <div class="container">
    "A room without books is like a body without a soul." - Marcus Tullius Cicero
  </div>
</div>



    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="scripts.js"></script>
</body>
</html>
