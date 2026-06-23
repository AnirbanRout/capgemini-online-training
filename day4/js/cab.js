const runBtn = document.getElementById("runBtn");
const resultBox = document.getElementById("timelineTrack");

const stepNames = [
    "Validate Location",
    "Find Drivers",
    "Calculate Fare",
    "Verify Payment",
    "Assign Driver",
    "Confirm Booking"
];

runBtn.addEventListener("click", () => {
    resultBox.innerHTML = "";
    runSteps();
});

function runStep(step, index) {
    return new Promise((resolve, reject) => {
        const select = step.querySelector("select");
        const status = select.value === "true";

        setTimeout(() => {
            resultBox.innerHTML += `
                <div style="padding:6px 0;">
                    Step ${index + 1} - ${stepNames[index]} : 
                    <b style="color:${status ? 'green' : 'red'}">
                        ${status ? "PASS" : "FAIL"}
                    </b>
                </div>
            `;
            if (status) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

function runSteps() {
    const steps = document.querySelectorAll(".step-card");
    let chain = Promise.resolve();
    steps.forEach((step, index) => {
        chain = chain.then(() => runStep(step, index));
    });

    chain
        .then(() => {
            resultBox.innerHTML += `
                <div style="margin-top:10px; font-weight:bold; color:green;">
                    BOOKING CONFIRMED ✅
                </div>
            `;
        })
        .catch(() => {
            resultBox.innerHTML += `
                <div style="margin-top:10px; font-weight:bold; color:red;">
                    BOOKING FAILED ❌
                </div>
            `;
        });
}