export const qualifications = (rating1, rating2, rating3) => {
    const promedio = (rating1 + rating2 + rating3) / 3;
    let msg = (promedio <= 3.9) ? "Estudie" : "Becado"; 
    return msg;
}

