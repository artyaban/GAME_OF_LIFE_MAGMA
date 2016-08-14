<!DOCTYPE html>

<html>
    <head>
        <title>Welcome Game Of Life</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script type="text/javascript" src=" {{ URL::asset('js/gameoflife.js') }}"></script>


<link rel="stylesheet" href="{{ URL::asset('css/styles.css') }}" />
 
    </head>

    <body onload="grid()">
        <div class="container">


            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        
                <header>

                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                    <h1><hr>Game Of Life.<hr></h1>
                    
                    </div>


                    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 "><hr>
                    <a class='btn btn-primary btn-lg' href="Instructions">how to play</a>
                    </div>

                </header>

                <section>

                    <div class="col-md-12">

                        <h3>Select the size for the Grid</h3>
                        <div class="form-group">
                        <label>Height Size : </label><input class='form-control' value="4" type="number" id="GridHeight" min="4" onchange="grid();">
                        </div>
                        <div class="form-group">
                        <label>width Size : </label><input class='form-control' value="4" type="number" id="GridWidth" min="4"
                        onchange="grid();">
                        </div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
                        
                        <div id="grid">
                
                        </div>

                    </div>

                </section>

            </div>


    </body>

</html>
