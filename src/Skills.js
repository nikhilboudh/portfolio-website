import React from 'react'
import Footer from "./Footer";

function Skills() {
    return (
        <>    
<section id="header" className="">

<div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
        <div className="skill_head">
            <h>My Current ,<strong>Skills</strong></h>
            </div>


          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1"></div>



<div className="skill_img">
<div className="html_img"><img alt ="nik"src="data:image/png;base64,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" style={{width: 90}}/>
<div><h>HTML5</h></div></div>
<div className="css_img"><img alt ="nik" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2TcXsdC1n49GM_oz57mSBeIvKuxNj7PATw&usqp=CAU" style={{width: 90}}/>
<div><h>CSS3</h></div>
</div>
<div className="js_img"><img alt ="nik"  src="data:image/png;base64,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" style={{width: 90}}/>
<div><h>JAVASCRIPT</h></div>

</div>
</div>

<div className="skill_image">
<div className="react_img">
    <img alt ="nik" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANwAAACbCAMAAAA+2QVnAAAAUVBMVEX///9h2vv7/v+W5vxq3PuH4/x94fxy3vu17v3z/P9v3fvu+/+m6v1/4fzp+v7k+f7V9f7R9P7c9/6u7P3K8/7A8P2g6f2Q5fyb5/zF8f6j6f0RokoUAAAJvElEQVR4nO1c6ZKyvBJ2IGyK7Ah6/xd6lO4kTTac+V4gpyrPrykhTJrel3C5BAQEBAQEBAQEBAQEBAQEBAQcjmrIyz5/1r9YUrR5Oc/l+Js1Z+B5/0Fc42f0zYpbLpb8pOPe+/sPqJIfCjZv8qJdr/hJbkfs8y/orj8qps61YEi1BZmnsnnTafuQV9nu7+6m+7PiyD1/jcS01zd6o+7dZsvt8dH7/gZPvrmxaZ8l5UrWGO5m8vr1vaSuB05te/zetxBlsFFOSJEThSoV5hUxkduWX2xAru9Hbvs7DLBVyqRGCmq6shNNJi7Mlf4MpxE6BcCLef1jI7jHBvlrLrlWmR7y2n+3v0MEOqQa8igXusVFMxIimWna1cHvB+z3V2hs6nKbOC3JYuRvgpkPgxUFebV6j5PQL7vqTZdGzrz0HX7UXN2uRqP4Wq49993rrxFr5kSi5szK6o4Tmph9NZiUcs+d/gGwf0t0ISw/47SpvoGjBjuz3z7/hMVFMetlaSDdchfZVPdUbG1qIBEJM0vvgsxDc1mAIjnukCmDM/BP3RJwCqptXRGS6bSFENR8leYeBjAEs+OORsglc4VXk8swnQTgnCNbqWkW4HDSPnLutkHcTYbKH62zFxOAuD22+Hfc3DpXoBtPkca7lTU+Eue2llHCOVajzZxs1PloLcH5pparsdQ1Hn/ZbM/VQz8HztfyxnNqJRvUO3OJMtr0l2fAYeVaJAfjEl5rMTqELcN0DkDyTLFHxRRW9aiAJmcGfPUtKyiXXQ36heiuKRmqYGLg8+gQ2fMAu8r1Cw+dkggdg4FB1nd0KhqLsmBBiz2bdhie4/gchrbhaqcTAdGXb2UGcHQrGx7Vbf4iUZcO9srbeiWcG2nhWYDYA4zErc3nJHORRZElj7zBhSDCZ9JhBBZRiqafjA2RTRLjvIvAa/hmLLmn/hNdErDcN2MpffM/gGedENr71cCy+xS/+r7P83HM8/cfr3hKUgeT77k3DdZiNHbmGO4+tSQA3NtdjQY1GX3IxuuHvrl0ztuKb95aVOiQTVH1Nq56A5k9zu4gqw37d6bGzTrmAsYKOwCDTLAfHzOrse/MUKXV37eo7dyYUyg/QN4yrmCV/rT0LPK6FdcYSha34/GGUH4ANTMRtAGvk3kl58kZrcgb6fy+KWsjjJ2xjoI56YY/hjiZZ3rwsoZL1K7omw43nbQ8noJlg9iJLX+jxG3NXWAjPYvI+uXvYiS+hR3b0lo17IXc8Dd/EdZkc1eYNCyp0riS0UtH7Et8oF/oSMOe2GsplwX4uHUEXI3L+NpayCbJ7kR9H7UcVckO0zwpktPKFYFcfewl6hK9Ogg5u9PwCosQJbeVbMWjWnCPHWQ2B/E61VZUgjKGboBMJdxWlpW2VdHZVSjJal23FUJyiOLx2pyhOwr7Sy+zyoROSe5IFwslOMaEUCMhKvmiA+JpXswyNexRLjFBkAWVSguSr1LzRrzbIJWAFv8j2z0c48Ws1FjnoL4vE4yNDIGM7BZElKsP01OrVF2zE/A9p2bb3JB9ypRTaYirlwfyq9ko8j6Kobj2LxGBgFmds+RRqq5RIBl7kf7a1lQvcGpuX9ZtjZ5JJj3VNSqkqW3Fb9YCA/Yu97WYoFT2iLHgLpAw5mEmjjgKzjpm5wzYzH2bCCAejkiWBxWEB5YKBAlfOG8d43pQF73+dwocAK44bug0xl0sBUzazENV3Zzh2LVZvj3gA294JT+WShB9RehCXOHxfXfiLmxDNbiroOV+g5dTXhFPwR2mHuY59y20a5G7Ck4J8cZaaURjLldUh7xD1LNvoR1MfWZlXSf2Llk3qmQBpMmRtRNr+IhhjKPa9A+A0aN1VEhmYA91jYrCsMg66xGrb2wX4EYsr7AgxYdKXbOGJJ4WvSxOBvOivXvlmKpZ/DiNIuVODCU7Wc9bR9vml4ZZD9u9KSkOfpjsNpgTTEw7bQ2BTKxRTcHsmLRZFGwO6P7waCrVA0zYJ8Mwl5i2XqWNGH14FSmG17pJ6QwGeDdEwrRrqTiIz8zDKbJRxWISX9Lye1+4WPlvIhG3TlT9U5BTD0rVBjjWSG7ISzXxdrSshIlsIti+JmHIjqXtIhT8jTutEcnzHJ0mfO/f+vvbGLF7v4og0QR9RDzV5LKRMfeBR2DIAbFE7gZoXuwoliNVyx6prx+N72JZc0UuSQeJHdpJpqW6lPcJM8EEtcVhBXXOFZXLYiQhaXL0YMpIZ+nnj3SuThmhfdwox2HNBb2blMuGdkLYzqUTE26rDDsru5Iqx6rFYQNvl+BN8ELmrlxlgPM5/fGaxhYc3MKgiXf2sBT21obHJef1jjs9nRn4i97uPqJN5Yp5G7Tu+uQ4O3IAqlLbURYvbXE0hHbBJF3josljrRrBXucPuEWjqQJ0TcpkQzBRKN83mgoRae7DrMYbVW8pJSzox6HpqqLAzb7/qLpmGLV4kzK/P3tMY4W6dOz1l4i9O27cbm/6W5zg1zYAwVM5GmaBvkT6GOEhvg2nc8v/ESij6dug6zNseeHlFt/OTPDAUnbdqmbs47tzCvgHpmTbKlKe4omdFIBKs16L5jFaHE9Jcn8jSaY4Rpp1+ZsE/30CRBt6yY93YleVH0ziDB1M8A++jcpCDchg5/gnYEhlAXMBU48bHuPbkDMwwzQswkkRslar518IOou4ngvQLWNcgULIjztibcxczLKp7rlwHaSNqYrxg4KmkzwXbCPt22P8PcB1m69xXi30xGs+qlA8ih9wnlis5GHOh92YLAC+ejOcDmBOXRGHOXkqYE1CvTypBHJnvayE1fbupf2Q4YnYIG5dT3eE/TJE9QfbB2lJbury0fP/JXFy1sbpon3kHIil7Zz4gu/aNZOPOrf1kZaI1DjvDkvvpStYgn/7mEixGgN2fO7FSyc+Od94rWTm1nFs0F3fwq+HyzeLjtcsJgIsn4+qt3X3BMCujcMIkbCTPRnbN39gFdyh64s4Z6Cz+gLRsIcETnxoyXiIJZY3egT8kKDGjkg4b4bNnEoQq59AKsyfIzwdk1Eu5ZkHOc4uvQLLFc0DqfSvtAfjGesuOOlwxZQMOWiUjfR3PECx7/jaX4BDMiTBbiVpasNe6uFPJk8W8wkXzxKeD5Ad9yUujBra+9Ub9hHtm0zwYXE+mOFbeegDcbLjmqy/y2Bu2DfrnkImlmjzHV6g+THC1rAnX2RdwTc/gDCNxLrO0xZ6y9m/gqyARp370+lv8nq1Y+yfpRSoafCf9V+YvWigAxF3z7JUBd3rY/NYGo9f77No+ynNWJaUfpMG0MbXAgICAgICAgICAgICAgICAgL8xf8A4xxTC2yQpSAAAAAASUVORK5CYII=" style={{width: 100}}/>
<div><h>REACT</h></div>
</div>
<div className="bootstrap_img">
    <img alt ="nik"  src="data:image/jpeg;base64,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" style={{width: 90}}/>
<div><h>BOOTSTRAP</h></div>
</div>

<div className="firebase_img">
    <img alt ="nik" src="data:image/png;base64,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" style={{width: 75}}/>
<div><h>FIREBASE</h></div>
</div>
</div>
<div className="skill_head">
            <h>The <strong>Projects</strong> That I Had Done </h>
            </div>
            <div className="project">
    <strong3><a href ="https://invomed-c38b9.web.app/">Medical Project</a>  <br></br></strong3>
    <h>Desktop Websites</h> <br></br>
    <strong3><a href ="https://shopifyekart.web.app/">E-Commerce</a><br></br></strong3>
    <strong3><a href ="https://e-challenge-65446.web.app/">Amazon clone</a><br></br></strong3>
     </div>

        </div>
</div>
</div>
<Footer/>

</section>
</>
    )
}

export default Skills;
