
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registries').del()
    .then(function () {
      // Inserts seed entries
      return knex('registries').insert([
        {reg_username: 'happy_couple', reg_pw: 'pw', reg_first_name: 'John', reg_last_name: 'Savone', reg_description: "We're so happy to celebrate our marraige in October. Thank you for looking at our registry. I've decided to go with Registree, because it will save my friends and family a lot of money, instead of picking a specific store. Can't wait to see you all soon!", reg_profile_pic: 'https://media.licdn.com/dms/image/C4E03AQFeqkYCxZLo7g/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=0LUjP2LaF-nv0RDeyZcCEV7frLR6ztfX-NJ4oyaM0EY'},
        {reg_username: 'jsavone'},
        {reg_username: 'bsavone'},
        {reg_username: 'csavone'},
        {reg_username: 'dsavone'},
        {reg_username: 'esavone'},
      ]);
    });
};
