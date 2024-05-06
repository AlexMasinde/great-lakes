export default function ContactDetails() {
  return (
    <div>
      <p className="text-xl font-light">Get in Touch with Us</p>
      <p className="my-4 font-extralight">
        Questions, comments, or suggestions? Simply fill in the form and we’ll
        be in touch.
      </p>
      <div className="flex items-center">
        <div className="mr-1">
          <LocationSvg />
        </div>
        <p className="font-extralight">1055 Mfangano Street, Nairobi</p>
      </div>
      <div className="flex items-center mt-1">
        <div className="mr-1">
          <PhoneSvg />
        </div>
        <p className="font-extralight">+254 703 447 147</p>
      </div>
      <div className="flex items-center mt-1">
        <div className="mr-1">
          <MailSvg />
        </div>
        <p className="font-extralight">info@africangreatlakesinform.org</p>
      </div>
    </div>
  );
}

function LocationSvg() {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#ffcc00"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 2)"
      >
        <path d="m6.5 16.5407715.6311176-.7118691c.71585099-.8191184 1.36011688-1.5983525 1.93279767-2.3377022l.4733382-.6239608c1.97516433-2.6615039 2.96274653-4.77276704 2.96274653-6.33378943 0-3.33218241-2.6862915-6.03344997-6-6.03344997s-6 2.70126756-6 6.03344997c0 1.56102239.98758218 3.67228553 2.96274653 6.33378943l.4733382.6239608c.73630387.9505925 1.5909423 1.9671163 2.56391527 3.0495713z" />
        <circle cx="6.5" cy="6.5" r="2.5" />
      </g>
    </svg>
  );
}

function PhoneSvg() {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#ffcc00"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 3)"
      >
        <path d="m2.5.5h6c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-6c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z" />
        <path d="m3.5 12.5h4" />
      </g>
    </svg>
  );
}

function MailSvg() {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#ffcc00"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.5 4.5)"
      >
        <path d="m0 2v8c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-8c0-1.1045695-.8954305-2-2-2h-10c-1.1045695 0-2 .8954305-2 2z" />
        <path d="m2 3 5 3 5-3" />
      </g>
    </svg>
  );
}
