
import styles from "./page.module.css";


export default function Home() {
  return (

    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>TODO LIST</h1>
          <button>click me</button>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

        </div>
      </div>

    </div>
  );
}
