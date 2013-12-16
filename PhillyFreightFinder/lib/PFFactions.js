///////////////////////////////////////////	
//Action on feature selections////////////
		function zoomToPoint(e){
		var layer= e.target;
		var latLng = layer.getLatLng();
			map.setView(latLng, 15);
			}
		function zoomToFC(e){
		var layer= e.target;
		var latLng = layer.getLatLng();
			map.setView(latLng, 13);
			}	
	//Highway Features/////////////////////	
	//Freeways
		function highlightfreeways(e) {
			resetHighlight();              //remove highlight from all other features
			var layer = e.target;          //define layer value for click events
			var layersearch = e.feature;   //define layer value for search event
			if (layersearch===undefined){  //if click event set highlight style and define prop value
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        //if search event set highlight style define prop value
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                +"<tr><td style='width:200px;'><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "<br/>"
                +"<i style='font-size:10px;color:#999999;'>Type: </i>" + props.Type + "<br/>"
                +"<td><img src='images/shields/" + props.SHLD_ID + ".png' alt='Shield' height='50' align='right'></td><td style='width:10px;'></td></tr></table>"
                +"<table><tr><td style='width:110px;height:15px;'></td><td style='text-align:center;width:40px;'><strong>" + props.DIR_1 + "</strong></td><td style='text-align:center;width:40px;'><strong>" + props.DIR_2 + "</strong></td></tr>"
                +"<tr><td style='width:150px;'><strong style='font-size:12px;'><a title='Predominant lane count for designated segment' class='info-tipTip'>Capacity <span style='font-weight:normal;'>(lanes)</span></a>: </strong></td><td style='text-align:center;width:40px;'>" + props.CAP_1 + "</td><td style='text-align:center;width:40px;'>" + props.CAP_2 + "</td></tr>"
                +"<tr><td style='width:150px;'><strong style='font-size:12px;'><a title='Average Annual Daily Traffic volume for truck traffic (FHWA Vehicle Classes 5-13)' class='info-tipTip'>Truck AADT</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.ACT_1A + "</td><td style='text-align:center;width:40px;'>" + props.ACT_2A + "</td></tr>"
                +"<tr><td style='width:150px;'><strong style='font-size:12px;'>Truck share of <a title='Average Annual Daily Traffic' class='info-tipTip'>AADT</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.ACT_1B + "</td><td style='text-align:center;width:40px;'>" + props.ACT_2B + "</td></tr></table>"
                +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.YEAR + " " + props.SOURCE + "</i><br/>"
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'hwyicon icon';
			toggleinfo();			
		};
	//Truck parking
		function highlighttruckparking(e) {
			resetHighlight();
			highlightMarkers(e);
            var layer = e.target;
            var props = layer.feature.properties
			var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #cccccc;'>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Municipality(ies): </i>" + props.Township_s + "</td></tr></table>"
                            +"<table><tr><td style='width:170px;height:15px;'></td></tr>"
                            +"<tr><td style='width:170px;'><strong style='font-size:12px;'>Truck Spaces Available: </strong></td><td style='text-align:center;width:40px;'>" + props.Capacity + "</td></tr>"
                            +"<tr><td style='width:170px;'><strong style='font-size:12px;'><a title='Truck space utilization determined by single overnight count' class='info-tipTip'>Truck Spaces Utilized</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.Activity_1 + "</td></tr></table>"
                            +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                            +"<br/>"
                            +"<p>More Information: " + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'trkparkicon icon';
			toggleinfo();			
		};
	//Truck parking poly
		function highlighttruckparkingpoly(e) {
			resetHighlight();
			var layer = e.target;
			var layersearch = e.feature;   
			if (layersearch===undefined){  
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #cccccc;'>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                            +"<tr><td><i style='font-size:10px;color:#999999;'>Municipality(ies): </i>" + props.Township_s + "</td></tr></table>"
                            +"<table><tr><td style='width:170px;height:15px;'></td></tr>"
                            +"<tr><td style='width:170px;'><strong style='font-size:12px;'>Truck Spaces Available: </strong></td><td style='text-align:center;width:40px;'>" + props.Capacity + "</td></tr>"
                            +"<tr><td style='width:170px;'><strong style='font-size:12px;'><a title='Truck space utilization determined by single overnight count' class='info-tipTip'>Truck Spaces Utilized</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.Activity_1 + "</td></tr></table>"
                            +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                            +"<br/>"
                            +"<p>More Information: " + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'trkparkicon icon';	
			toggleinfo();		
		};
	//NHS Connectors
		function highlightNHS(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
			var props = layer.feature.properties
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Facility Served: </i>" + props.Fac_Served + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr>"
                        +"<table><tr><td style='width:160px;height:15px;'></td></tr>"
                        +"<tr><td style='width:160px;'><strong style='font-size:12px;'><a title='Predominant lane count for designated segment' class='info-tipTip'>Lanes per direction</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:160px;'><strong style='font-size:12px;'><a title='Average Annual Daily Traffic' class='info-tipTip'>AADT</a>: </strong></td><td style='text-align:center;width:40px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i><br/>"
                        +"<br/><p>" + props.Profile + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'nhsicon icon';
			toggleinfo();			
		};
	//NHS Connector poly
		function highlightNHSpoly(e) {
			resetHighlight();
			var layer = e.target;
			var layersearch = e.feature;   
			if (layersearch===undefined){  
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name_1 + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Facility Served: </i>" + props.Fac_Served + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr>"
                        +"</table>"
                        +"<table><tr><td style='width:160px;height:15px;'></td></tr>"
                        +"<tr><td style='width:160px;'><strong style='font-size:12px;'><a title='Predominant lane count for designated segment' class='info-tipTip'>Lanes per direction</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:160px;'><strong style='font-size:12px;'><a title='Average Annual Daily Traffic' class='info-tipTip'>AADT</a>: </strong></td><td style='text-align:center;width:40px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i><br/>"
                        +"<br/><p>" + props.Profile + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'nhsicon icon';
			toggleinfo();			
		};
	//HWY River Crossings
		function highlighthwyrivcrossing(e) {
			resetHighlight();
            var layer = e.target;
            var layersearch = e.feature;   
			if (layersearch===undefined){  
				highlightMarkers(e);
				var props = layer.feature.properties;
			}else{                        
				highlightMarkersearch(e);
				var props = layersearch.properties;
			}
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Highway: </i>" + props.Line + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Tolled: </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Type_1 + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Connecting Municiaplity(ies): </i>" + props.Town_1 + " - " + props.Town_2 + "</td></tr></table>"
                    +"<table><tr><td style='width:190px;height:15px;'></td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'><a title='Total count of lanes, both directions.' class='info-tipTip'>Travel Lanes</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'>Vertical Restriction <span style='font-weight:normal;'>(ft)</span>: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'><a title='Average Annual Daily Traffic' class='info-tipTip'>AADT</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'hwycl';
			document.getElementById('iconography').className = 'hwyrivicon icon';
			toggleinfo();			
		};
		
	//Rail Features//////////////////
	//Rail Lines
		function highlightraillines(e) {
			resetHighlight();
			var layer = e.target;
			var layersearch = e.feature;   
			if (layersearch===undefined){  
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator + "</td></tr>"
                    //+"<tr><td><i style='font-size:10px;color:#999999;'>Length (mi): </i>${MILES}</td></tr></table>"
                    +"<table><tr><td style='width:100%;height:15px;'></td></tr>"
                    +"<tr><td style='width:160px;padding-right:5px;'><strong style='font-size:12px;'><a title='Predominant count of through tracks on designated segment' class='info-tipTip'>Number of Tracks</a>: </strong></td><td style='text-align:right;width:120px;'>" + props.Cap1 + "</td></tr>"
                    +"<tr><td style='width:180px;padding-right:5px;'><strong style='font-size:12px;'><a title='Ability to operate double stack trains. Double stack is a technology allowing intermodal containers to be stack two high on train cars.' class='info-tipTip'>Double Stack Clearance</a>: </strong></td><td style='text-align:right;width:120px;'>" + props.Cap2 + "</td></tr>"
                    +"<tr><td style='width:160px;padding-right:5px;'><strong style='font-size:12px;'><a title='Capacity to operate 286,000 pound rail cars on designated segment' class='info-tipTip'>286k Capacity</a>: </strong></td><td style='text-align:right;width:160px;'>" + props.Cap3 + "</td></tr>"
                    +"<tr><td style='width:160px;padding-right:5px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:right;width:120px;'>n/a</td></tr></table><i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railicon icon';
			toggleinfo();
		};
	//Rail Yards
		function highlightrailyardpt(e) {
			resetHighlight();
			var layer = e.target;
            var layersearch = e.feature;   
			if (layersearch===undefined){  
				highlightMarkers(e);
				var props = layer.feature.properties;
			}else{                        
				highlightMarkersearch(e);
				var props = layersearch.properties;
			}
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Connecting Line: </i>" + props.Rail_Line + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    +"<table><tr><td style='width:80px;height:15px;'></td></tr>"
                    +"<tr><td style='width:120px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.GIS_Acres + "</td></tr>"
                    +"<tr><td style='width:120px;'><strong style='font-size:12px;'>Annual Car Count: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railyardicon icon';
			toggleinfo();
		};
	//Rail Yards poly
		function highlightrailyardspoly(e) {
			resetHighlight();
			var layer = e.target;
			var layersearch = e.feature;   
			if (layersearch===undefined){  
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Connecting Line: </i>" + props.Rail_Line + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    +"<table><tr><td style='width:80px;height:15px;'></td></tr>"
                    +"<tr><td style='width:120px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.GIS_Acres + "</td></tr>"
                    +"<tr><td style='width:120px;'><strong style='font-size:12px;'>Annual Car Count: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railyardicon icon';
			toggleinfo();
		};
	//Rail Crossings
		function highlightrailcrossings(e) {
			resetHighlight();
			var layer = e.target;
            var layersearch = e.feature;   
			if (layersearch===undefined){  
				highlightMarkers(e);
				var props = layer.feature.properties;
			}else{                        
				highlightMarkersearch(e);
				var props = layersearch.properties;
			}
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #cccccc;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner_1 + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    // +"<tr><td><i style='font-size:10px;color:#999999;'>Cargo: </i>{Cargo}</td></tr></table>"
                    +"<table><tr><td style='width:140px;height:15px;'></td></tr>"
                    +"<tr><td style='width:140px;'><strong style='font-size:12px;'><a title='Count of active tracks at grade grossing' class='info-tipTip'>Tracks at Crossing</a>: </strong></td><td style='text-align:center;width:40px;'>" + props.Cap + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source_1 + " </i>"
                    +"<p>" + props.Report + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railcrossicon icon';
			toggleinfo();
		};
	//Rail Intermodal Poly
		function highlightrailintermodalpoly(e) {
			resetHighlight();
			var layer = e.target;
			var layersearch = e.feature;   
			if (layersearch===undefined){  
				layer.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties;
			}else{                        
				e.setStyle({ 
				weight: 6,color:"#00ffff"
				});
				var props = layersearch.properties;
			}
			var info = '<p>' + props.Name_1 + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'><tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    +"<table><tr><td style='width:80px;height:15px;'></td></tr><tr><td style='width:80px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.GIS_Acres_1 + "</td></tr>"
                    +"<tr><td style='width:80px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i><p>Related Freight Center: " + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railintericon icon';
			toggleinfo();
		};
	//Rail Intermodal Point
		function highlightrailintermodal(e) {
			resetHighlight();
			var layer = e.target;
            var layersearch = e.feature;   
			if (layersearch===undefined){  
				highlightMarkers(e);
				var props = layer.feature.properties;
			}else{                        
				highlightMarkersearch(e);
				var props = layersearch.properties;
			}
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'><tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    +"<table><tr><td style='width:80px;height:15px;'></td></tr><tr><td style='width:80px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.GIS_Acres + "</td></tr>"
                    +"<tr><td style='width:80px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i><p>Related Freight Center: " + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railintericon icon';
			toggleinfo();
		};
	//Rail River Crossing
		function highlightrailrivcrossing(e) {
			resetHighlight();
			var layer = e.target;
            var layersearch = e.feature;   
			if (layersearch===undefined){  
				highlightMarkers(e);
				var props = layer.feature.properties;
			}else{                        
				highlightMarkersearch(e);
				var props = layersearch.properties;
			}
            var info = '<p>' + props.Name + '</p>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Rail Line: </i>" + props.Line + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator(s): </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Type_1 + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Connecting Municiaplity(ies): </i>" + props.Town_1 + " - " + props.Town_2 + "</td></tr></table>"
                    +"<table><tr><td style='width:190px;height:15px;'></td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'>Width <span style='font-weight:normal;'>(tracks)</span>: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'><a title='Ability to operate double stack trains. Double stack is a technology allowing intermodal containers to be stack two high on train cars.' class='info-tipTip'>Double Stack Clearance</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'><a title='Capacity to operate 286,000 pound rail cars on designated segment' class='info-tipTip'>286k Capacity</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_3 + "</td></tr>"
                    +"<tr><td style='width:190px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'railcl';	
			document.getElementById('iconography').className = 'railrivicon icon';
			toggleinfo();
		};
		
	//Ports/Waterways Features//////
	//Port Poly	
		function highlightportpoly(e) {
			resetHighlight();
			var layer = e.target;
			layer.setStyle({
				weight: 6,color:"#00ffff"
			});
			var props = layer.feature.properties
            var feattype = '<p>'+ props.Type + ' Terminal</p>';
            var info = '<p>' + props.Name + '</p>';
			var content = "<div id='baseInfo'>"
                        +"<div class='datafield'>" + props.Owner + "</div><div class='labelfield'>Owner</div>"
                        +"<div class='datafield'>" + props.Operator_s + "</div><div class='labelfield'>Operator(s)</div>"
                        +"<div class='datafield'>" + props.Township + "</div><div class='labelfield'>Municipal Location</div>"
                        +"</div><!--close baseInfo-->"
                        +"<div class='infoDivider'></div>"
                        +"<div id='indactorInfo'>"
                        +"<ul class='nav nav-tabs'><!--tabs for indicators-->"
                        +"<li class='active'><a href='#portCap' data-toggle='tab'>Capacity</a></li>"
                        +"<li><a href='#portAct' data-toggle='tab'>Activity</a></li></ul>"
                        +"<div id='indicator' class='tab-content'><!--tab panes-->"
                        +"<div class='tab-pane active' id='portCap' style='height:125px;'>"
                                +"<table class='table table-hover'>"
                                +"<tr class='active'><td><strong>Qty of Berths: </strong></td><td>" + props.Cap_1 + "</td></tr>"
                                +"<tr><td><strong>Total Berth Length: </strong></td><td>" + props.Cap_2 + " linear ft</td></tr>"
                                +"<tr class='active'><td><strong>Berth Depth <span style='font-weight:normal;'><a title='Mean Low Water' data-toggle='tooltip'>(MLW)</a></span>: </strong></td><td>" + props.Cap_3 + " feet</td></tr>"
                                +"<tr><td><strong>Available Cranes: </strong></td><td><a title='" + props.Cap_4 + "' data-toggle='tooltip'>#</a></td></tr>"
                                +"<tr class='active'><td><strong>Warehouse Space: </strong></td><td>" + props.Cap_5 + "</td></tr></table>"
                        +"</div>"
                        +"<div class='tab-pane' id='portAct' style='height:125px;'>"
                                +"<table class='table table-hover'>"
                                +"<tr class='active'><td class='item'><strong>2012 Ship Arrivals: </strong></td><td>" + props.Act_1 + "</td><td>o</td></tr>"
                                +"<tr><td class='item'><strong>Yr/Yr change: </strong></td><td>n/a</td><td>o</td></tr>"
                                +"<tr class='active'><td class='item'><strong>Cargo handled: </strong></td><td colspan='2' style='line-height:1!important;'>" + props.Cargo + "</td></tr></table>"
                        +"</div></div>"
                        +"<div class='labelfield source'>" + props.Source + "</div></div>"
                        //+"<div style='height:34px;'><a href='http://www.dvrpc.org/webmaps/PhillyFreightFinder/reports/FC/FC34.pdf' target='_blank' style='line-height:34px;float:left;'><div class='pdf'></div>Related Report</a></span></div></div>"
			document.getElementById('infoheader').innerHTML = info;
            document.getElementById('featureName').innerHTML = feattype;
			document.getElementById('info').innerHTML = content;
            document.getElementById('featureName').className = 'portFN';    
			document.getElementById('infoheader').className = 'portcl';	
			document.getElementById('iconography').className = 'porticon';
		};	
	//Port Point
		function highlightporticon(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
			var props = layer.feature.properties
            var info = '<h1>' + props.Name + '</h1>';
            var content = "<table style='border-bottom:1px solid #cccccc;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Type + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Operator: </i>" + props.Operator_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                    +"<table><tr><td style='width:100px;padding-right:10px;'><strong style='font-size:12px;'>Qty of Berths: </strong></td><td style='width:140px;'>" + props.Cap_1 + "</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>Total Berth Length: </strong></td><td style='width:140px;'>" + props.Cap_2 + " linear ft</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>Berth Depth <span style='font-weight:normal;'><a title='Mean Low Water' class='info-tipTip'>(MLW)</a></span>: </strong></td><td style='width:140px;'>" + props.Cap_3 + " feet</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>Available Cranes: </strong></td><td style='width:140px;'>" + props.Cap_4 + "</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>Warehouse Space: </strong></td><td style='width:140px;'>" + props.Cap_5 + "</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>Total Acreage: </strong></td><td style='width:140px;'>" + props.Acres + "</td></tr>"
                    +"<tr><td style='width:120px;padding-right:10px;'><strong style='font-size:12px;'>2012 Ship Arrivals: </strong></td><td style='width:140px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<strong style='font-size:12px;padding-right:10px;'>Cargo Handled: </strong>   " + props.Cargo + "<br/>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                    +"<p>Related Freight Center: " + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'portcl';	
			document.getElementById('iconography').className = 'porticon';
		};	
	//Anchorage Poly	
		function highlightanchoragepoly(e) {
			resetHighlight();
			var layer = e.target;
			layer.setStyle({
				weight: 6,color:"#00ffff"
			});
			var props = layer.feature.properties
            var info = '<h1>' + props.Name + '</h1>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Adjacent Municiaplity(ies): </i>" + props.Township_s + "</td></tr>"
                    //+"<tr><td><i style='font-size:10px;color:#999999;'>Start Point: </i>" + props.Start + "</td></tr>"
                    //+"<tr><td><i style='font-size:10px;color:#999999;'>End Point: </i>" + props.End + "</td></tr>"
                    +"<table><tr><td style='width:180px;height:15px;'></td></tr>"
                    +"<tr><td style='width:180px;'><strong style='font-size:12px;'>Annual Ships (" + props.YEAR + "): </strong></td><td style='text-align:center;width:40px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'portcl';	
			document.getElementById('iconography').className = 'anchicon';
		};
	//Anchorage Point
		function highlightanchoricon(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
			var props = layer.feature.properties
            var info = '<h1>' + props.Name + '</h1>';
            var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Adjacent Municiaplity(ies): </i>" + props.Township_s + "</td></tr>"
                    //+"<tr><td><i style='font-size:10px;color:#999999;'>Start Point: </i>" + props.Start + "</td></tr>"
                    //+"<tr><td><i style='font-size:10px;color:#999999;'>End Point: </i>" + props.End + "</td></tr>"
                    +"<table><tr><td style='width:180px;height:15px;'></td></tr>"
                    +"<tr><td style='width:180px;'><strong style='font-size:12px;'>Annual Ships (" + props.YEAR + "): </strong></td><td style='text-align:center;width:40px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'portcl';	
			document.getElementById('iconography').className = 'anchicon';
		};
	//River Poly	
		function highlightriver(e) {
			resetHighlight();
			var layer = e.target;
			layer.setStyle({
				weight: 6,color:"#00ffff"
			});
			var props = layer.feature.properties
            var info = '<h1>' + props.NAME + '</h1>';
			var content = "<table style='border-bottom:1px solid#999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Adjacent Municiaplity(ies): </i>" + props.Township_s + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'><a title='Nautical miles from Atlantic Ocean' class='info-tipTip'>Start Point</a>: </i>" + props.Start + "</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'><a title='Nautical miles from Atlantic Ocean' class='info-tipTip'>End Point</a>: </i>" + props.End + "</td></tr></table>"
                    +"<table><tr><td style='width:150px;'><strong style='font-size:12px;'>Channel Width <span style='font-weight:normal;'>(ft)</span>: </strong></td><td style='text-align:center;width:80px;'>" + props.Cap_1 + "</td></tr>"
                    +"<tr><td style='width:180px;'><strong style='font-size:12px;'>Channel Depth <span style='font-weight:normal;'><a title='Mean Lower Low Water' class='info-tipTip'>(MLLW in ft)</a></span>: </strong></td><td style='text-align:center;width:80px;'>" + props.Cap_2 + "</td></tr>"
                    +"<tr><td style='width:180px;'><strong style='font-size:12px;'><a title='Approved vertical clearance within navigable channel' class='info-tipTip'>Maximum Air Draft <span style='font-weight:normal;'>(ft)</span></a>: </strong></td><td style='text-align:center;width:80px;'>" + props.Cap_3 + " </td></tr>"
                    +"<tr><td style='width:180px;'><strong style='font-size:12px;'>Annual Activity: </strong></td><td style='text-align:center;width:80px;'>n/a</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'portcl';	
			document.getElementById('iconography').className = 'rivericon';
		};			
		
	//Freight Centure features///////////
	//Intermediate Poly
		function highlightFCinterpoly(e) {
				resetHighlight();
				var layer = e.target;
				layer.setStyle({
					weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties
                var info = '<h1>' + props.Name + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                        +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        +"<p>" + props.REPORT + "</p>";
				document.getElementById('infoheader').innerHTML = info;
				document.getElementById('info').innerHTML = content;
				document.getElementById('infoheader').className = 'frtctrintcl';	
				document.getElementById('iconography').className = 'fcintericon';
			};
	//Intermediate point
		function highlightFCinterpt(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
			var props = layer.feature.properties
            var info = '<h1>' + props.Name + '</h1>';
			var content = "<table style='border-bottom:1px solid #999999;'>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                    +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                    +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                    +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                    +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>" + props.Act_1 + "</td></tr></table>"
                    +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                    +"<p>" + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'frtctrintcl';	
			document.getElementById('iconography').className = 'fcintericon';
		};
	//Major Poly
		function highlightFCmajorpoly(e) {
				resetHighlight();
				var layer = e.target;
				layer.setStyle({
					weight: 6,color:"#00ffff"
				});
                var props = layer.feature.properties
				var info = '<h1>' + props.Name + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                        +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        +"<p>" + props.REPORT + "</p>";
				document.getElementById('infoheader').innerHTML = info;
				document.getElementById('info').innerHTML = content;
				document.getElementById('infoheader').className = 'frtctrmajcl';	
				document.getElementById('iconography').className = 'fcmajoricon';
			};	
	//Major point
		function highlightFCmajorpt(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
            var props = layer.feature.properties
			var info = '<h1>' + props.Name + '</h1>';
            var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                        +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        +"<p>" + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'frtctrmajcl';	
			document.getElementById('iconography').className = 'fcmajoricon';
		};
	//Mega Poly
		function highlightFCmegapoly(e) {
			resetHighlight();
			var layer = e.target;
			layer.setStyle({
				weight: 6,color:"#00ffff"
			});
            var props = layer.feature.properties
			var info = '<h1>' + props.Name + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                        +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        +"<p>" + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'frtctrmegcl';	
			document.getElementById('iconography').className = 'fcmegicon';
		};			
	//Mega point
		function highlightFCmegapt(e) {
			resetHighlight();
            highlightMarkers(e);
			var layer = e.target;
            var props = layer.feature.properties
			var info = '<h1>' + props.Name + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Center_Typ + " Center</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township_s + "</td></tr></table>"
                        +"<table><tr><td style='width:60px;height:15px;'></td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Acres: </strong></td><td style='text-align:center;width:100px;'>" + props.Acres + "</td></tr>"
                        +"<tr><td style='width:60px;'><strong style='font-size:12px;'>Activity: </strong></td><td style='text-align:center;width:100px;'>n/a</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        +"<p>" + props.REPORT + "</p>";
			document.getElementById('infoheader').innerHTML = info;
			document.getElementById('info').innerHTML = content;
			document.getElementById('infoheader').className = 'frtctrmegcl';	
			document.getElementById('iconography').className = 'fcmegicon';
		};

	//Airport features///////////
	//Commercial Poly
		function highlightcommairpoly(e) {
				resetHighlight();
				var layer = e.target;
				layer.setStyle({
					weight: 6,color:"#00ffff"
				});
                var props = layer.feature.properties
				var info = '<h1>(' + props.NAVID + ') ' + props.Name + '</h1>';
				var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Airport_Ty + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner_1 + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                        +"<table><tr><td style='width:100%;height:15px;'></td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway Length(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Total Acreage: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_3 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'><a title='Count of annual takeoffs and landings' class='info-tipTip'>Annual Operations</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Activity_1 + "</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        //+"<p>More Information: " + props.REPORT + "</p>"
                        +"<p>Related Freight Center: " + props.FC_REPORT + "</p>";
				document.getElementById('infoheader').innerHTML = info;
				document.getElementById('info').innerHTML = content;
				document.getElementById('infoheader').className = 'commaircl';	
				document.getElementById('iconography').className = 'commercialicon';
			};
	//Commercial point
		function highlightcommairpt(e) {
    			resetHighlight();
                highlightMarkers(e);
    			var layer = e.target;
    			var props = layer.feature.properties
                var info = '<h1>(' + props.NAVID + ") " +props.Name_1 + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Airport_Ty + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner_1 + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                        +"<table><tr><td style='width:100%;height:15px;'></td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway Length(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Total Acreage: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_3 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'><a title='Count of annual takeoffs and landings' class='info-tipTip'>Annual Operations</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Activity_1 + "</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        //+"<p>More Information: " + props.REPORT + "</p>"
                        +"<p>Related Freight Center: " + props.FC_REPORT + "</p>";
    			document.getElementById('infoheader').innerHTML = info;
    			document.getElementById('info').innerHTML = content;
    			document.getElementById('infoheader').className = 'commaircl';	
    			document.getElementById('iconography').className = 'commercialicon';
		};
	//releiver Poly
		function highlightrelairpoly(e) {
				resetHighlight();
				var layer = e.target;
				layer.setStyle({
					weight: 6,color:"#00ffff"
				});
				var props = layer.feature.properties
                var info = '<h1>(' + props.NAVID + ") " +props.Name + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Airport_Ty + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner_1 + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                        +"<table><tr><td style='width:100%;height:15px;'></td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway Length(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Total Acreage: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_3 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'><a title='Count of annual takeoffs and landings' class='info-tipTip'>Annual Operations</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Activity_1 + "</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        //+"<p>More Information: " + props.REPORT + "</p>"
                        +"<p>Related Freight Center: " + props.FC_REPORT + "</p>";
				document.getElementById('infoheader').innerHTML = info;
				document.getElementById('info').innerHTML = content;
				document.getElementById('infoheader').className = 'relaircl';
				document.getElementById('iconography').className = 'releivericon';
			};
	//releiver point
		function highlightrelvairpt(e) {
    			resetHighlight();
                highlightMarkers(e);
    			var layer = e.target;
    			var props = layer.feature.properties
                var info = '<h1>(' + props.NAVID + ") " +props.Name_1 + '</h1>';
                var content = "<table style='border-bottom:1px solid #999999;'>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Type: </i>" + props.Airport_Ty + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Owner: </i>" + props.Owner_1 + "</td></tr>"
                        +"<tr><td><i style='font-size:10px;color:#999999;'>Municiaplity(ies): </i>" + props.Township + "</td></tr></table>"
                        +"<table><tr><td style='width:100%;height:15px;'></td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_1 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Runway Length(s): </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_2 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'>Total Acreage: </strong></td><td style='text-align:center;width:100px;'>" + props.Cap_3 + "</td></tr>"
                        +"<tr><td style='width:100px;'><strong style='font-size:12px;'><a title='Count of annual takeoffs and landings' class='info-tipTip'>Annual Operations</a>: </strong></td><td style='text-align:center;width:100px;'>" + props.Activity_1 + "</td></tr></table>"
                        +"<i style='font-size:10px;color:#999999;'>Data Source: " + props.Source + " </i>"
                        //+"<p>More Information: " + props.REPORT + "</p>"
                        +"<p>Related Freight Center: " + props.FC_REPORT + "</p>";
    			document.getElementById('infoheader').innerHTML = info;
    			document.getElementById('info').innerHTML = content;
    			document.getElementById('infoheader').className = 'relaircl';	
    			document.getElementById('iconography').className = 'releivericon';
		};	
		
//zoom to polygon feature
	function zoomToFeature(e) {
			map.fitBounds(e.target.getBounds());
			};
			
	
//reset all layer styles before highlight (LONG HANDED--NEED TO REVISE)		
		function resetHighlight(){
			//reset poly features individually
			railines.setStyle(function (feature) {
				switch (feature.properties.Type) {
					case 'Industrial Track \/ Shortline': return {color: "#FEEDDE",weight:5, opacity:.90};
					case 'Secondary': return {color: "#FDCC8A",weight:5, opacity:.90};
					case 'Interstate': return {color: "#FD8D3C",weight:5, opacity:.90};
				}	}),
			railyardpoly.setStyle({fillColor: "#FBA919", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
			intermodalpoly.setStyle({fillColor: "#FBA919", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
			nhspoly.setStyle({weight:5, color:"#E8C3F5 ", opacity:1}),
			freeway.setStyle(function (feature) {
				switch (feature.properties.Type){
					case 'Limited Access Highway': return {color: "#C57AE0",weight:5, opacity:1};
					case 'Interstate Highway': return {color: "#884C9E",weight:5, opacity:1};
				}	 }),
			truckparkpoly.setStyle({fillColor: "#884C9E", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			river.setStyle({fillColor: "#55B8DF", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.65}),
//			portpoly.setStyle({fillColor: "#29A0CF", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			anchoragepoly.setStyle({fillColor: "#0E76BC", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.65}),
//			FCinterpoly.setStyle({fillColor: "#F9AB90", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			FCmajorpoly.setStyle({fillColor: "#F26122", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			FCmegapoly.setStyle({fillColor: "#C1332B", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			commairpoly.setStyle({fillColor: "#639752", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
//			relairpoly.setStyle({fillColor: "#6EBD55", fillOpacity:.50, weight:1, color:"#E0E0E0 ", opacity:.75}),
   	        resetIconhighlights();
		}

//hack to highlight markers with box on click
        function highlightMarkers(e){
            var layer = e.target;
            var iconElem = L.DomUtil.get(layer._icon);
            iconElem.style.border="4px #00ffff solid";
            iconElem.style.height="38px";
            iconElem.style.width="38px";
            iconElem.style.marginTop="-19px";
            iconElem.style.marginLeft="-19px";
            iconElem.id="selectedIcon";
        };
//hack to highlight markers with box on search
        function highlightMarkersearch(e){
            var layer = e.feature;
            var iconElem = L.DomUtil.get(e._icon);
            iconElem.style.border="4px #00ffff solid";
            iconElem.style.height="38px";
            iconElem.style.width="38px";
            iconElem.style.marginTop="-19px";
            iconElem.style.marginLeft="-19px";
            iconElem.id="selectedIcon";
        };
//hack to remove highlight from markers
        function resetIconhighlights(){
        	var highlticon = document.getElementById('selectedIcon');
        	if (highlticon!=undefined){
        		highlticon.style.border="";
        		highlticon.style.height="30px";
        		highlticon.style.width="30px";
        		highlticon.style.marginTop="-15px";
        		highlticon.style.marginLeft="-15px";
        		highlticon.id="";
        	}else{
        		//do nothing
        	}
        };
