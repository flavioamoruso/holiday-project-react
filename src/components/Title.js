import React from "react";

const titleStyle={

  width:'fit-content',
  position:'relative',
  fontVariant:'small-caps',
  display:'grid',
  placeItems:'center'

}

const Title = ({text}) => {
  return (

    <div style={titleStyle}>
      <h4>{text || 'Titolo'}</h4>
      <div className="underline"></div>
    </div>

  );
};

export default Title;