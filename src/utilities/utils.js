/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
    return reg.test(path);
}

export function categorize(data){
    let aux = data.map(item => { return {...item, children: []} }  );
    console.log(aux,'AUX');
    for (let i = 0; i < aux.length; i++) {
        for (let x = 0; x < aux.length; x++) {
            if(aux[i].category_parent_id === aux[x].id){
                aux[x].children.push(aux[i]);
                aux[i] = {};
            }
        }
    }
    let response = aux.filter(item=>item.id);
    return response;
}