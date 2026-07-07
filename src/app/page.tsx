export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="/" className="logo">SportHub</a>
        <div className="search-bar">
          <input type="text" placeholder="Search courts..." className="search-input" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <img src="/hero.png" alt="People playing padel or tennis" />
      </section>

      {/* Main Content */}
      <main className="main-container">
        {/* Tabs */}
        <div className="tabs">
          <div className="tab active">Padel</div>
          <div className="tab">Futsal</div>
          <div className="tab">Tennis</div>
          <div className="tab">Mini Soccer</div>
          <div className="tab">Bulu Tangkis</div>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {/* Card 1 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 7 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 8 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 9 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
          {/* Card 10 */}
          <div className="card">
            <div className="card-img-container">
              <img src="/futsal.png" alt="Futsal court" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Futsal Jawen Kidul</h3>
              <p className="card-subtitle">Sidoarjo RT04/RW78</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
