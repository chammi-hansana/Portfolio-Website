import {motion} from "framer-motion";

const variants = {
    open:{
      transition:{
        staggeredChildren : 0.1,
      },
    },

    closed:{
      transition:{
        staggeredChildren : 0.05,
        staggeredDirection : -1,
      },
    },
};
const Links = () => {
  const items = ["Homepage","Services","Portfolio","Contact", "About"];

 
    return (
      <motion.div className="links" variants={variants}> 
      {items.map((item) => (
        <a href = {`#${item}`} key={item}>
          {item}
        </a>
      ))} 
        
      </motion.div>
    )
  }
  
  export default Links