 /* Выбрать селектор */
 const item = document.querySelector('.item')
 const placeholders = document.querySelectorAll('.placeholder')

 /* отследить событие начал тащить и пеерстал */
 item.addEventListener('dragstart', dragstart)
 item.addEventListener('dragend', dragend)

 for (const placeholder of placeholders) {
    /* над */
    placeholder.addEventListener('dragover', dragover)
    /* зашли на территории */
    placeholder.addEventListener('dragenter', dragenter)
    /* ушли */
    placeholder.addEventListener('dragleave', dragleave)
    /* отпустили */
    placeholder.addEventListener('drop', dragdrop)
 }

 function dragstart(event) {
    /* добавить класс */
     event.target.classList.add('hold')
    /*  делаем действие с задержкой */
     setTimeout(() => event.target.classList.add('hide'), 0)
 }

 function dragend(event) {
    event.target.classList.remove('hold', 'hide')
    /* event.target.className = 'item' */
 }

 function dragover(event) {
    event.preventDefault()
 }

 function dragenter(event) {
    event.target.classList.add('hovered')
 }

 function dragleave(event) {
    event.target.classList.remove('hovered')
 }

 function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
 }