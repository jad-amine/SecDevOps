import React from "react";

export default function ContactUs() {
  return (
    <div style={{ marginTop: 100, marginBottom: 100 }}>
      <p style={{ textAlign: "center", color: "white", fontSize: "3.2em" }}>
        Contact Us
      </p>
      <div style={{ paddingTop: 50, paddingBottom: 50 }}>
        <form action="mailto:jade1992amine@outlook.com" encType="text/plain">
          student name <input type="text" name="text" />
          student name <input type="text" name="subject" />
          <input type="submit" value={"Send"} />
          <a href="mailto:jade1992amine@gmail.com?Subject=Hello" target="_top">
            Mail
          </a>
        </form>
      </div>
    </div>
  );
}

//    <form action="mailto:emailid@example.com" method="post" enctype="text/plain">
// Student Name:<br><input type="text" name="sname"> <br>
// Student Subject:<br><input type="text" name="ssubject"><br>
// <input type="submit" value="Send">
// </form>
