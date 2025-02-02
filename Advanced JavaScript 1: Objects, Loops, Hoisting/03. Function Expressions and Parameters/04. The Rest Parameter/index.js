function getLabelsHtml(text, sender, ...staffObjs) {
    return staffObjs.map(staffObj => 
`<div class="label-card">
    <p>Dear ${staffObj.name}</p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>`
    ).join('')
}

const text = 'Thank you for all your hard work throughout the year! 🙏🎁'
const sender = 'Tom'

document.getElementById('labels-container').innerHTML = getLabelsHtml(
    text, 
    sender, 
    {name: 'Sally'}, 
    {name: 'Mike'}, 
    {name: 'Rob'}, 
    {name: 'Harriet'}
    ) 

