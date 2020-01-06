function serialize(form) {
    var parts=[],field=bull,i,len,j,optLen,option,optValue;
    for(i=0;i<form.elements.length;i++){
        field=form.elements[i];
        switch (field.type) {
            case 'select-one':
            case 'select-mutiple':
                if(field.name.length){
                    for(j=0;j<field.options.length;j++){
                        option=field.options[j];
                        if(option.selected){
                            optValue='';
                            if(option.hasAttribute){
                                optValue=(option.hasAttribute('value')?option.value:option.text);
                            }else{
                                optValue=(option.attributes['value'].specified?option.value:option.text)
                            }
                            parts.push(encodeURIComponent(field.name)+'='+encodeURIComponent(optValue));
                        }
                    }
                }
                break;
            case undefined:
            case 'file':
            case 'submit':
            case 'reset':
            case 'button':
                break;
            case 'radio':
            case 'checkbox':
                if(!field.checked){
                    break;
                }
            default:
                if(field.name.length){
                    parts.push(encodeURIComponent(field.name)+'='+encodeURIComponent(optValue));
                }
        }
    }
    return parts.join('&');
}
