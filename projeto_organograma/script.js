const data = [
    { "id": 1, "parentId": null, "name": "A" },
    { "id": 2, "parentId": 1, "name": "B" },
    { "id": 3, "parentId": 1, "name": "C" },
    { "id": 4, "parentId": 1, "name": "D" },
    { "id": 5, "parentId": 2, "name": "E" },
    { "id": 6, "parentId": 5, "name": "F" },
    { "id": 7, "parentId": 6, "name": "G" },
    { "id": 8, "parentId": 7, "name": "H" },
    { "id": 9, "parentId": 8, "name": "I" },
    { "id": 10, "parentId": 3, "name": "J" },
    { "id": 11, "parentId": 4, "name": "K" },
    { "id": 12, "parentId": 11, "name": "L" },
    { "id": 13, "parentId": 12, "name": "M" },
    { "id": 14, "parentId": 10, "name": "N" }
];

function renderOrganograma(data) {
    const map = {};

    data.forEach(item => {
        map[item.id] = { ...item, children: [] };
    });
    console.log(map)

    let root = null;

    data.forEach(item => {
        if (item.parentId === null) {
            root = map[item.id];
        } else {
            if (map[item.parentId]) {
                map[item.parentId].children.push(map[item.id]);
            }
        }
    });

    const options = {
        width: 1000,
        height: 700,
        direction: 'top',
        contentKey: 'name',  // Verifique se isso está correto
        siblingSpacing: 50,
        highlightOnHover: true,
        nodeWidth: 150,
        nodeHeight: 100,
        nodeTemplate: (content) => {
            return `<div style='display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center; height: 100%;'>
                      <div style="font-weight: bold; font-family: Arial; font-size: 14px; text-align: center;">${content || 'N/A'}</div>
                    </div>`;
        },
        nodeBGColor: '#ffffff',
        nodeBGColorHover: '#f0f0f0',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#333',
        edgeColor: '#333',
        enableExpandCollapse: true,
        canvasStyle: 'border: 1px solid black; background: #f6f6f6;',
        enableToolbar: true,
    };

    const tree = new ApexTree($("#minhaArvore"), options);
    tree.render(root);

    document.querySelectorAll("#minhaArvore path").forEach(line => {
        line.setAttribute("stroke-width", "10");
        line.setAttribute("stroke", "#000000");
    });
}

$(document).ready(function() {
    renderOrganograma(data);
});