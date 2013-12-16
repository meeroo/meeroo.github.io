$(document).ready(function () {
        $('#truck_all').click(function(){
            if($('#trkChkd').val() == 'true'){
                $('.trucks').prop('checked', true).change();
                $(this).removeClass('check').addClass('uncheck');
                $('#trkChkd').val('false');
            }
            else{
                $('.trucks').prop('checked', false).change();
                $(this).removeClass('uncheck').addClass('check');     
                $('#trkChkd').val('true');
            }
        });

        $('.trucks').change(function(){
            var all = $('input.trucks').length;
            var checked = $('input.trucks:checked').length;
            if(all == checked){
                $('#truck_all').removeClass('check').addClass('uncheck');
                $('#trkChkd').val('false');
            }else{
                $('#truck_all').removeClass('uncheck').addClass('check');
                $('#trkChkd').val('true');
            }
        });
    }); 

$(document).ready(function () {
        $('#rail_all').click(function(){
            if($('#railChkd').val() == 'true'){
                $('.rails').prop('checked', true).change();
                $(this).removeClass('check').addClass('uncheck');
                $('#railChkd').val('false');
            }
            else{
                $('.rails').prop('checked', false).change();
                $(this).removeClass('uncheck').addClass('check');     
                $('#railChkd').val('true');
            }
        });

        $('.rails').change(function(){
            var all = $('input.rails').length;
            var checked = $('input.rails:checked').length;
            if(all == checked){
                $('#rail_all').removeClass('check').addClass('uncheck');
                $('#railChkd').val('false');
            }else{
                $('#rail_all').removeClass('uncheck').addClass('check');
                $('#railChkd').val('true');
            }
        });
    }); 

$(document).ready(function () {
        $('#water_all').click(function(){
            if($('#h20Chkd').val() == 'true'){
                $('.water').prop('checked', true).change();
                $(this).removeClass('check').addClass('uncheck');
                $('#h20Chkd').val('false');
            }
            else{
                $('.water').prop('checked', false).change();
                $(this).removeClass('uncheck').addClass('check');     
                $('#h20Chkd').val('true');
            }
        });

        $('.water').change(function(){
            var all = $('input.water').length;
            var checked = $('input.water:checked').length;
            if(all == checked){
                $('#water_all').removeClass('check').addClass('uncheck');
                $('#h20Chkd').val('false');
            }else{
                $('#water_all').removeClass('uncheck').addClass('check');
                $('#h20Chkd').val('true');
            }
        });
    }); 

$(document).ready(function () {
        $('#air_all').click(function(){
            if($('#airChkd').val() == 'true'){
                $('.air').prop('checked', true).change();
                $(this).removeClass('check').addClass('uncheck');
                $('#airChkd').val('false');
            }
            else{
                $('.air').prop('checked', false).change();
                $(this).removeClass('uncheck').addClass('check');     
                $('#airChkd').val('true');
            }
        });

        $('.air').change(function(){
            var all = $('input.air').length;
            var checked = $('input.air:checked').length;
            if(all == checked){
                $('#air_all').removeClass('check').addClass('uncheck');
                $('#airChkd').val('false');
            }else{
                $('#air_all').removeClass('uncheck').addClass('check');
                $('#airChkd').val('true');
            }
        });
    }); 

$(document).ready(function () {
        $('#fc_all').click(function(){
            if($('#fcChkd').val() == 'true'){
                $('.fc').prop('checked', true).change();
                $(this).removeClass('check').addClass('uncheck');
                $('#fcChkd').val('false');
            }
            else{
                $('.fc').prop('checked', false).change();
                $(this).removeClass('uncheck').addClass('check');     
                $('#fcChkd').val('true');
            }
        });

        $('.fc').change(function(){
            var all = $('input.fc').length;
            var checked = $('input.fc:checked').length;
            if(all == checked){
                $('#fc_all').removeClass('check').addClass('uncheck');
                $('#fcChkd').val('false');
            }else{
                $('#fc_all').removeClass('uncheck').addClass('check');
                $('#fcChkd').val('true');
            }
        });
    }); 

//http://jsfiddle.net/C9Tw2/18/
