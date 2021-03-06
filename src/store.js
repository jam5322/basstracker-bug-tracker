// Example POST method implementation:
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  //console.log(response)
  return response.json(); // parses JSON response into native JavaScript objects
}

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

export default {
  user: null,
  bassimage: "bass.jpg",
  
  destinations: [
    {
      name: "Project-List",
      slug: "project-list",
      image: "by-list.png",
      id: 1,
      description:
        "all about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
      experiences: [
        {
          name: "Iguaçu Falls",
          slug: "iguacu-falls",
          image: "iguacu-falls.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Pão de Açúcar",
          slug: "pao-de-acucar",
          image: "pao-de-acucar.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Sao Paulo",
          slug: "sao-paulo",
          image: "sao-paulo.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Salvador",
          slug: "salvador",
          image: "salvador.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        }
      ]
    },
    {
      name: "Tickets-By-Project",
      slug: "tickets-by-project",
      image: "by-project.png",
      id: 2,
      description:
        "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh. Cras justo risus, sollicitudin eget nulla a, consequat convallis tortor. Fusce eget neque metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Sed aliquam nunc id lectus sagittis, ac elementum eros egestas. Aliquam sed tempor dui.",
      experiences: [
        {
          name: "Panama City",
          slug: "panama-city",
          image: "panama-city.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Panama Canal",
          slug: "panama-canal",
          image: "panama-canal.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Bocas del Toro",
          slug: "bocas-del-toro",
          image: "bocas-del-toro.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Santa Catalina",
          slug: "santa-catalina",
          image: "santa-catalina.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        }
      ]
    },
    {
      name: "Tickets-By-Date",
      slug: "tickets-by-date",
      image: "by-date.jpg",
      id: 3,
      description:
        "all about hawaii. Etiam iaculis, ex in semper fringilla, lorem augue maximus lorem, in aliquet ex massa non enim. Maecenas pharetra orci eu semper pharetra. Suspendisse vel elit semper, fringilla metus ac, pulvinar justo. Vestibulum nibh lacus, pellentesque non arcu vel, efficitur eleifend lorem. Duis ultrices bibendum orci, nec laoreet elit. In vulputate massa vel massa cursus gravida. Aliquam sed lacus pulvinar, imperdiet risus at, lacinia dolor. Maecenas pellentesque arcu mattis iaculis efficitur. Maecenas quis sem pulvinar, sodales neque eget, efficitur odio.",
      experiences: [
        {
          name: "Na Pali Coast",
          slug: "na-pali-coast",
          image: "na-pali-coast.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "O'Ahu's North Shore",
          slug: "ohaus-north-shore",
          image: "ohaus-north-shore.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Waikiki Beach",
          slug: "waikiki-beach",
          image: "waikiki-beach.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Kilauea Volcano",
          slug: "kilauea-volcano",
          image: "kilauea-volcano.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        }
      ]
    },
    {
      name: "By-Tag/Type",
      slug: "by-tag/type",
      image: "by-tag.jpg",
      id: 4,
      description:
        "all about jamaica. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis.",
      experiences: [
        {
          name: "Tower Isle",
          slug: "tower-isle",
          image: "tower-isle.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Blue Mountain",
          slug: "blue-mountain",
          image: "blue-mountain.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Montego Bay",
          slug: "montego-bay",
          image: "montego-bay.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        },
        {
          name: "Port Antonio",
          slug: "port-antonio",
          image: "port-antonio.jpg",
          description:
            "Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis. Suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor. Maecenas facilisis, nisi vel pellentesque maximus, lectus felis malesuada purus, a pulvinar elit est quis turpis. Duis convallis purus quis finibus consequat. Pellentesque faucibus tincidunt augue non consequat. Donec fringilla at est sit amet blandit. Nunc at porttitor ligula. Fusce sed odio turpis."
        }
      ]
    }
  ],
  projects: [
    {
      name: "BassTracker Bug Tracker",
      slug: "basstracker bug tracker",
      description: "A Bug Tracker made by Big Bass (Jonah)",
      id: 0
    },
    {
      name: "OtherProject",
      slug: "otherproject",
      description: "A Project that isn't the Bug Tracker made by Big Bass (Jonah)",
      id: 1
    },
  ],
  tickets: [
      {
      projectId: 0,
      name: "First Ticket Bug",
      slug: "first ticket bug",
      description: "This is the first BassTracker 'test bug'",
      timestamp: "1/23/2021",
      tag: "test"
    },
    {
      projectId: 1,
      name: "First Project2 Ticket Bug",
      slug: "first project2 ticket bug",
      description: "This is the first OtherProject 'test bug'",
      timestamp: "1/23/2021",
      tag: "bug"
    },
    {
      projectId: 0,
      name: "2nd BassTracker Ticket Bug",
      slug: "2nd basstracker ticket bug",
      description: "This is the second BassTracker 'test bug'",
      timestamp: "1/23/2021",
      tag: "serious"
    },
  ],
  tagTypes: [
    "serious", "bug", "test"
  ],
  items: getData('http://localhost:5000/api/v1/ticket/'),
  // [{"TicketId":"0","Project":"BassTracker","TicketName":"First Ticket Bug","slug":"first ticket bug","TicketDescription":"This is the first BassTracker 'test bug'","Timestamp":"1/23/2021","Tag":"test"},
  // {"TicketId":"1", "Project":"OtherProject","TicketName":"First Project2 Ticket Bug","slug":"first project2 ticket bug","TicketDescription":"This is the first OtherProject 'test bug'","Timestamp":"1/23/2021","Tag":"bug"},
  // {"TicketId":"2", "Project":"BassTracker","TicketName":"2nd BassTracker Ticket Bug","slug":"2nd basstracker ticket bug","TicketDescription":"This is the second BassTracker 'test bug'","Timestamp":"1/23/2021","Tag":"serious"}],
};
