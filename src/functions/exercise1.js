export const qualifications = (rating1, rating2, rating3) => {
    const average = (rating1 + rating2 + rating3) / 3;
    let msg = (average <= 3.9) ? "Estudie" : "Becado"; 
    return msg;
}

