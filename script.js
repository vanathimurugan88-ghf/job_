function searchJobs() {

    let keyword = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let location = document
        .getElementById("locationFilter")
        .value;

    let jobs = document.querySelectorAll(".job-card");

    let count = 0;

    jobs.forEach(function(job) {

        let title = job
            .getAttribute("data-title")
            .toLowerCase();

        let jobLocation = job
            .getAttribute("data-location");

        let titleMatch = title.includes(keyword);

        let locationMatch =
            location === "all" ||
            jobLocation === location;

        if (titleMatch && locationMatch) {
            job.style.display = "block";
            count++;
        } else {
            job.style.display = "none";
        }
    });

    document.getElementById("jobCount").innerText =
        count + " Jobs Available";

    document.getElementById("noResult").style.display =
        count === 0 ? "block" : "none";
}


function viewJob(jobTitle) {
    alert(
        "Job Details\n\n" +
        "Position: " + jobTitle +
        "\n\nThank you for your interest!"
    );
}