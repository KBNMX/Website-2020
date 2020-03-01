import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({
  className,
  thumbUrl,
  title,
  excerpt,
  horarios,
  telefono,
  link,
}) => {
  // Add all classs to an array
  const addAllClasses = ['blog_post'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  const textoa = telefono => {
    return { __html: telefono };
  };

  return (
    <div className={addAllClasses.join(' ')}>
      <div className="thumbnail">
        <img src={thumbUrl} alt={title} />
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        <p className="excerptsmall">{horarios}</p>
        {/* <p className="excerptbold">{telefono}</p> */}
        <p className="excerptbold" dangerouslySetInnerHTML={textoa(telefono)} />
        {link && <div className="learn_more">{link}</div>}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  horarios: PropTypes.string,
  telefono: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;
