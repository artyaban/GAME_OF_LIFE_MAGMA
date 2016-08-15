<!DOCTYPE html>

<html>
<head>
    <title>Welcome Game Of Life</title> 



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script type="text/javascript" src=" {{ URL::asset('js/gameoflife.js') }}"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/styles.css') }}" />

   
</head>
<body onload="grid()">
  

        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">

            <header>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <h1 class="tittle"><hr>Game Of Life.<hr></h1>
                    
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 "><hr>
                    <a class='btn btn-primary btn-lg' href="Instructions">how to play</a>
                </div>
            </header>

            <section>
                <div class="col-md-12">

                    <h3>Select the size for the Grid</h3>

                    <div class="form-group">
                    <label>Grid Size : </label><input class='form-control' value="25" type="number" id="GridHeight" min="4" onchange='grid();' onclick="grid();">
                    </div>

                    <div class="form-group">  
                    <hr>
                    <a  class='btn btn-success' onclick="play();">PLAY</a>   
                    <button class='btn btn-danger'onclick="stop()">STOP</button>
                    </div >
                   
                    <div id="grid" class="grid">
                    </div>
                    
                    <hr>
                </div>
            </section>

            <footer>
                <div class="col-md-12">
                <p>Made by Arturo Aban. 15/AUG/2016.</p>
                </div>
            </footer>
        </div>
</body>
</html>
