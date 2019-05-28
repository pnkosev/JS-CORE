function solve() {
    let obj = (() => {
        let reports = [];
        let id = 0;
        let selector = undefined;

        function report(author, description, reproducible, severity) {
            reports[id] = {
                ID: id++,
                author,
                description,
                reproducible,
                severity,
                status: 'Open'
            }

            if (selector) {
                draw();
            }
        }

        function setStatus(id, newStatus) {
            // let searchedReport = reports.find(e => e.ID == id);
            // searchedReport.status = newStatus;
            reports[id].status = newStatus;

            if (selector) {
                draw();
            }
        }

        function remove(id) {
            reports = reports.filter(e => e.ID != id);

            if (selector) {
                draw();
            }
        }

        function sort(method) {
            if (method === 'author') {
                reports = reports.sort((a, b) => a.author.localeCompare(b.author));
            } else if (method === 'severity') {
                reports = reports.sort((a, b) => a.severity - b.severity);
            } else if (method === 'ID') {
                reports = reports.sort((a, b) => a.ID - b.ID);
            }

            if (selector) {
                draw();
            }
        }

        function output(sel) {
            selector = sel;
        }

        function draw() {
            $(selector).html('');
            reports.forEach(r => {
                // let html = $('<div>').attr('id', "report_" + r.ID).addClass('report').append($('<div>').addClass('body').append($('<p>').text(r.description))).append($('<div>').addClass('title').append($('<span>').addClass('author').text('Submitted by: ' + r.author)).append($('<span>').addClass('status').text(r.status + " | " + r.severity)));
                let html = $(`
                    <div id="report_${r.ID}" class="report">
                        <div class="body">
                            <p>${r.description}</p>
                        </div>
                        <div class="title">
                            <span class="author">Submitted by: ${r.author}</span>
                            <span class="status">${r.status} | ${r.severity}</span>
                        </div>
                    </div>
                `);
                $(selector).append(html);
            });
        }

        return {
            report,
            setStatus,
            remove,
            sort,
            output,
        }

    })();
    return obj;
}
