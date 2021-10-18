export const Card = (props) => {
  //   const db = [
  //     {
  //       id: 0,
  //       img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/cbaea8960cf74534886d295f3450b5d8_292x292.jpeg',
  //       text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut',
  //     },
  //     {
  //       id: 1,
  //       img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/3f81302ba956403b82bcc5d7366c74c9_292x292.jpeg',
  //       text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut',
  //     },
  //     {
  //       id: 2,
  //       img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1cd986c075b5494a852afc5d5c67d0c4_292x292.jpeg',
  //       text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut',
  //     },
  //     {
  //       id: 3,
  //       img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/5c1dfd6131774760ad19fe0c169bda5e_292x292.png',
  //       text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut',
  //     },
  //     {
  //       id: 4,
  //       img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/5e934dc3-6f66-4745-bac1-6fbde0d4f871.jpg',
  //       text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut',
  //     },
  //   ];

  return (
    <>
      {/* {db.map((e) => {
        return ( */}
      <div className="card" style={{ backgroundColor: props.color }}>
        <div className="card-image">
          <img
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/3f81302ba956403b82bcc5d7366c74c9_292x292.jpeg"
            alt=""
          />
        </div>
        <div className="card-text">
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Maiores,suscipit fugiat! Fugiat natus explicabo incidunt animi aut
          </span>
        </div>
      </div>
      {/* );
      })} */}
    </>
  );
};
