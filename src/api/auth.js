



const checkEmail = (email)=>{
    fetch('http://localhost:3000/user/emailcheck', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: email,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al enviar los datos');
          }
          return response.json();
        })
        .then((data) => {
          setResponse(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
}