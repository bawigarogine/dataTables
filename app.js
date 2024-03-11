const datas = fetchData();

async function fetchData() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime');
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const datas = await response.json();
    const tableBody = document.querySelector("tbody");
    let tr ='';

    datas.data.forEach((data) => {

      tr += `
            <tr>
            <td>${data.title}</td>
            <td>${data.episodes}</td>
            <td>${data.aired.from}</td>
            <td>${data.status}</td>
            </tr>
        `;

        console.log(data);
    });


    
    tableBody.innerHTML = tr;

   
        $('#table').DataTable({
            "data" : datas.data,
            "columns" : [
                {"data" : 'title'},
                {"data" : 'episodes'},
                {"data" : 'aired.from'},
                {"data" : 'status'}
            ]
        })
    

  } catch (error) {
    console.log(error);
  }
}

