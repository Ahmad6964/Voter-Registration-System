

    // Filter Stete 
    

    const stateData = async()=>{
        let state = document.getElementById("state-data").value;
        const getData = await fetch(`http://localhost:4000/voters/state/${state}`,{
            method : 'GET'
        })
        const data = await getData.json()      
        document.getElementById('pro_data').innerHTML = "";
        for(let i=0; i<data.length; i++){
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].uc}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }
    // Filter District 

    const districtData = async()=>{
        let district = document.getElementById("district-data").value;
        const getData = await fetch(`http://localhost:4000/voters/district/${district}`,{
            method : 'GET'
        })
        const data = await getData.json() 
        document.getElementById('pro_data').innerHTML = "";     
        for(let i=0; i<data.length; i++){
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].uc}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }
    // Filter city 

    const cityData = async()=>{
        let city = document.getElementById("city-data").value;
        //  console.log(city);
        const getData = await fetch(`http://localhost:4000/voters/city/${city}`,{
            method : 'GET'
        })
        console.log(getData);
        const data = await getData.json()  
        document.getElementById('pro_data').innerHTML = "";    
        console.log(data);
        for(let i=0; i<data.length; i++){
            // console.log(data[i]);
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].uc}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }
    // Filter UC

    const ucData = async()=>{
        let uc = document.getElementById("uc-data").value;
        
        const getData = await fetch(`http://localhost:4000/voters/uc/${uc}`,{
            method : 'GET'
        })
        
        const data = await getData.json()      
        document.getElementById('pro_data').innerHTML = "";
        for(let i=0; i<data.length; i++){
        
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].UC}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }
    // Filter Ward

    const wardData = async()=>{
        let ward = document.getElementById("ward-data").value;
        //  console.log(ward);
        const getData = await fetch(`http://localhost:4000/voters/ward/${ward}`,{
            method : 'GET'
        })
        // console.log(getData);
        const data = await getData.json()      
        document.getElementById('pro_data').innerHTML = "";
        // console.log(data);
        for(let i=0; i<data.length; i++){
            // console.log(data[i]);
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].UC}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }
    // Filter Gender

    const genderData = async()=>{
        let gender = document.getElementById("gender-data").value;
         
        const getData = await fetch(`http://localhost:4000/voters/gender/${gender}`,{
            method : 'GET'
        })
        
        const data = await getData.json()  
        document.getElementById('pro_data').innerHTML = "";    
        
       for(let i=0; i<data.length; i++){
            
            document.getElementById('pro_data').innerHTML +=         
            `<tr>
            <td>${i+1}</td>
           <td>${data[i].name}</td>
           <td>${data[i].age}</td>
           <td>${data[i].gender}</td>
           <td>${data[i].state}</td>
           <td>${data[i].district}</td>
           <td>${data[i].city}</td>
           <td>${data[i].UC}</td>
           <td>${data[i].ward}</td>
           <td>${data[i].CNIC}</td>
           </tr>`  
        }
    }


    // Get Data For Gender Select Opetions

    const genderSelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/gender");
        const dat = await response.json();
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];

            let id = data.gender_id;
            let name = data.gender;
            document.getElementById("gender").innerHTML += `<option value="${id}">${name}</option>`
        }
    }
     genderSelect();
     

    //  State Select Opetion


    const stateSelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/state");
        // console.log(response);
        const dat = await response.json();
        // console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];
            // console.log(data);

            let id = data.state_id;
            let state = data.state
            // console.log(id,state);

    
            document.getElementById("state").innerHTML += `<option value="${id}">${state}</option>`
        }
    }
     stateSelect();

      //  District Select Opetion


    const districtSelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/district");
        // console.log(response);
        const dat = await response.json();
        // console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];
            // console.log(data);

            let id = data.dis_id;
            let district = data.district
            // console.log(id,district);

    
            document.getElementById("district").innerHTML += `<option value="${id}">${district}</option>`
        }
    }
     districtSelect();
      //  City Select Opetion


    const citySelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/city");
        // console.log(response);
        const dat = await response.json();
        // console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];
            // console.log(data);

            let id = data.city_id;
            let city = data.city
            // console.log(id,city);

    
            document.getElementById("city").innerHTML += `<option value="${id}">${city}</option>`
        }
    }
     citySelect();

    //  Ward select

    const wardSelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/ward");
        // console.log(response);
        const dat = await response.json();
        // console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];
            // console.log(data);

            let id = data.ward_id;
            let ward = data.ward
            // console.log(id,city);

    
            document.getElementById("ward").innerHTML += `<option value="${id}">${ward}</option>`
        }
    }
     wardSelect();

    //  UC Select Data

    const ucSelect = async()=> {
        const response = await fetch("http://localhost:4000/voters/uc");
        // console.log(response);
        const dat = await response.json();
        // console.log(dat);
        for (let i = 0; i < dat.length; i++) {
            const data = dat[i];
            // console.log(data);

            let id = data.uc_id;
            let uc = data.uc
            // console.log(id,uc);

    
            document.getElementById("uc").innerHTML += `<option value="${id}">${uc}</option>`
        }
    }
     ucSelect();






    //Post Data for Voter Registration  

    function myfun (event){
        event.preventDefault();
      let xhr = new XMLHttpRequest();
      let url = `http://localhost:4000/registration`;
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");
      let name = document.getElementById("name").value;
        console.log(name);
      let age = document.getElementById("age").value;
      console.log(age);
      let gender = document.getElementById("gender").value;
  console.log(gender);
      let CNIC = document.getElementById("CNIC").value;

      let city = document.getElementById("city").value;
    
      let district = document.getElementById("district").value;
  
      let state = document.getElementById("state").value;
      console.log(state);
      
      let UC = document.getElementById("uc").value;
     
      let Ward = document.getElementById("ward").value;
      console.log(name,age,gender,CNIC,city,district,state,UC,Ward);
      
      const data = `{
            "name": "${name}",
            "age": "${age}",
            "CNIC": "${CNIC}",
            "dis_id": "${district}",
            "city_id": "${city}",
            "uc_id": "${UC}",
            "ward_id": "${Ward}",
            "state_id": "${state}",
            "gender_id": "${gender}"
        }`;
        console.log(data);
      xhr.send(data);
    }

    