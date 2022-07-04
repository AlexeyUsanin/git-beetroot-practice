
// const link = document.createElement('a');
// const link = React.createElement('a', { href: 'http://google.com', className: 'link' }, 'Link');

const path = 'http://google.com';
// const link = <a href={path} className='link'>Link</a>;

// const header = React.createElement('header', null, link);

const header = (
  <header className="header">
    <a href={path} className='link'>Link</a>
  </header>
);


export default header;