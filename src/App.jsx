import { Profile } from "components/Profile/Profile";
import user from "data/user.json";

export const App = () => {
  return (
    <div className="main">
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </section>
    </div>
  );
};
