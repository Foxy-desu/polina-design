import {useEffect} from "react";

export function useVisibleSections(section, visibleSections, isVisible, setVisibleSections) {

  useEffect(()=> {
    const key = section.current.id;
    const index = visibleSections.indexOf(key);
    if(isVisible) {
      if(index === -1) {
        setVisibleSections([...visibleSections, key])
      }
    }if(!isVisible){
      if(index > -1) {
        setVisibleSections(visibleSections.filter((elem)=> {
          return elem !== key;
        }));
      }
    }
  }, [isVisible]);

}