                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ccd ..[?1l>[?2004l
]2;cd ..]1;cd[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize]2;camdenparker@Camdens-MacBook-Air]1;~/actualize]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize[0m[27m[24m[J[32m~/actualize[00m [K[?1h=[?2004hccd capstone-backend[1m/[0m[0m [?1l>[?2004l
]2;cd capstone-backend]1;cd[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/capstone-backend]2;camdenparker@Camdens-MacBook-Air]1;..stone-backend]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/capstone-backend[0m[27m[24m[J[32m~/actualize/capstone-backend [01;34m(main [32m✔[01;34m)[00m [K[?1h=[?2004hccd c  rrails s[?1l>[?2004l
]2;rails s]1;rails=> Booting Puma
=> Rails 7.0.2.2 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 5.6.2 (ruby 3.0.3-p157) ("Birdie's Version")
*  Min threads: 5
*  Max threads: 5
*  Environment: development
*          PID: 21423
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop
Started POST "/sessions" for ::1 at 2022-03-31 09:13:57 -0700
  [1m[36mActiveRecord::SchemaMigration Pluck (1.4ms)[0m  [1m[34mSELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC[0m
Processing by SessionsController#create as HTML
  Parameters: {"email"=>"camden@gmail.com", "password"=>"[FILTERED]", "session"=>{"email"=>"camden@gmail.com", "password"=>"[FILTERED]"}}
  [1m[36mUser Load (5.9ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."email" = $1 LIMIT $2[0m  [["email", "camden@gmail.com"], ["LIMIT", 1]]
  ↳ app/controllers/sessions_controller.rb:3:in `create'
[active_model_serializers] Rendered ActiveModel::Serializer::Null with Hash (0.06ms)
Completed 201 Created in 272ms (Views: 3.1ms | ActiveRecord: 14.1ms | Allocations: 28061)


Started GET "/listings" for ::1 at 2022-03-31 09:13:57 -0700
Processing by ListingsController#index as HTML
  [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mListing Load (6.1ms)[0m  [1m[34mSELECT "listings".* FROM "listings" ORDER BY "listings"."id" ASC[0m
  ↳ app/controllers/listings_controller.rb:9:in `index'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.6ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (10.74ms)
Completed 200 OK in 50ms (Views: 35.0ms | ActiveRecord: 11.4ms | Allocations: 25682)


Started GET "/conversations" for ::1 at 2022-03-31 09:14:01 -0700
Processing by ConversationsController#index as HTML
  [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (1.8ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) ORDER BY "conversations"."updated_at" ASC[0m
  ↳ app/controllers/conversations_controller.rb:7:in `index'
[active_model_serializers]   [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 10], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 5], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (12.59ms)
Completed 200 OK in 38ms (Views: 22.6ms | ActiveRecord: 6.2ms | Allocations: 22828)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:14:52 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.9ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (1.4ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (3.3ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (43.25ms)
Completed 200 OK in 54ms (Views: 36.2ms | ActiveRecord: 10.9ms | Allocations: 21325)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:16:21 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.5ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.2ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (6.48ms)
Completed 200 OK in 18ms (Views: 7.2ms | ActiveRecord: 1.2ms | Allocations: 11131)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:16:23 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.4ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.3ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.5ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (15.96ms)
Completed 200 OK in 46ms (Views: 16.1ms | ActiveRecord: 1.5ms | Allocations: 10995)


Started GET "/conversations" for ::1 at 2022-03-31 09:16:39 -0700
Processing by ConversationsController#index as HTML
  [1m[36mUser Load (0.6ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.7ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) ORDER BY "conversations"."updated_at" ASC[0m
  ↳ app/controllers/conversations_controller.rb:7:in `index'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 10], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 5], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (26.67ms)
Completed 200 OK in 49ms (Views: 31.2ms | ActiveRecord: 2.9ms | Allocations: 14813)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:16:40 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.5ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.5ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (27.42ms)
Completed 200 OK in 38ms (Views: 29.4ms | ActiveRecord: 1.9ms | Allocations: 10975)


Started GET "/conversations" for ::1 at 2022-03-31 09:16:54 -0700
Processing by ConversationsController#index as HTML
  [1m[36mUser Load (1.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.7ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) ORDER BY "conversations"."updated_at" ASC[0m
  ↳ app/controllers/conversations_controller.rb:7:in `index'
[active_model_serializers]   [1m[36mUser Load (7.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (1.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 10], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 5], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (46.51ms)
Completed 200 OK in 69ms (Views: 40.9ms | ActiveRecord: 11.6ms | Allocations: 14803)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:16:55 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (1.9ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.3ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (20.54ms)
Completed 200 OK in 29ms (Views: 21.6ms | ActiveRecord: 2.8ms | Allocations: 10974)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:18:16 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.6ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.3ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (11.07ms)
Completed 200 OK in 18ms (Views: 12.1ms | ActiveRecord: 1.4ms | Allocations: 10974)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:18:18 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.2ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.1ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (6.36ms)
Completed 200 OK in 9ms (Views: 6.6ms | ActiveRecord: 0.6ms | Allocations: 10974)


Started GET "/conversations/1" for ::1 at 2022-03-31 09:18:27 -0700
Processing by ConversationsController#show as HTML
  Parameters: {"id"=>"1"}
  [1m[36mUser Load (1.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.9ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) AND "conversations"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/conversations_controller.rb:23:in `show'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
[active_model_serializers]   [1m[36mMessage Load (0.3ms)[0m  [1m[34mSELECT "messages".* FROM "messages" WHERE "messages"."conversation_id" = $1[0m  [["conversation_id", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mUser Load (0.7ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/controllers/conversations_controller.rb:24:in `show'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ConversationSerializer with ActiveModelSerializers::Adapter::Attributes (20.11ms)
Completed 200 OK in 75ms (Views: 25.4ms | ActiveRecord: 3.0ms | Allocations: 10974)


Started GET "/listings" for ::1 at 2022-03-31 09:18:33 -0700
Processing by ListingsController#index as HTML
  [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mListing Load (0.7ms)[0m  [1m[34mSELECT "listings".* FROM "listings" ORDER BY "listings"."id" ASC[0m
  ↳ app/controllers/listings_controller.rb:9:in `index'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.3ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/listing_serializer.rb:7:in `owner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (16.18ms)
Completed 200 OK in 25ms (Views: 19.2ms | ActiveRecord: 2.0ms | Allocations: 9756)


Started GET "/conversations" for ::1 at 2022-03-31 09:18:34 -0700
Processing by ConversationsController#index as HTML
  [1m[36mUser Load (0.4ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
  ↳ app/controllers/application_controller.rb:13:in `current_user'
  [1m[36mConversation Load (0.5ms)[0m  [1m[34mSELECT "conversations".* FROM "conversations" WHERE (renter_id = 1 OR leaser_id = 1) ORDER BY "conversations"."updated_at" ASC[0m
  ↳ app/controllers/conversations_controller.rb:7:in `index'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 2], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 3], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 10], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 8], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.2ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 5], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.1ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 1], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers]   [1m[36mCACHE User Load (0.0ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 12], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:9:in `partner'
[active_model_serializers]   [1m[36mUser Load (0.5ms)[0m  [1m[34mSELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2[0m  [["id", 11], ["LIMIT", 1]]
[active_model_serializers]   ↳ app/serializers/conversation_serializer.rb:8:in `partner'
[active_model_serializers] Rendered ActiveModel::Serializer::CollectionSerializer with ActiveModelSerializers::Adapter::Attributes (33.02ms)
Completed 200 OK in 46ms (Views: 37.7ms | ActiveRecord: 2.7ms | Allocations: 14804)


^C- Gracefully stopping, waiting for requests to finish
=== puma shutdown: 2022-03-31 09:35:44 -0700 ===
- Goodbye!
Exiting
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/capstone-backend]2;camdenparker@Camdens-MacBook-Air]1;..stone-backend]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/capstone-backend[0m[27m[24m[J[32m~/actualize/capstone-backend [01;34m(main [32m✔[01;34m)[00m [K[?1h=[?2004hccd ..[?1l>[?2004l
]2;cd ..]1;cd[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize]2;camdenparker@Camdens-MacBook-Air]1;~/actualize]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize[0m[27m[24m[J[32m~/actualize[00m [K[?1h=[?2004hccd delib_practice[1m/[0m[0m [?1l>[?2004l
]2;cd delib_practice]1;cd[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hccode .[?1l>[?2004l
]2;code .]1;code[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hrruby ruby_practice.rb[1m [0m[0m [?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby{"name"=>"Majora", "age"=>28}
{"name"=>"Saron", "age"=>34}
{"name"=>"Danilo", "age"=>45}
9
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby9
0
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubyruby_practice.rb:25: syntax error, unexpected '.', expecting '|'
[m[1mnumbers.reduce(0){ |sum[1;4m.[;1m num| sum + num}[m
ruby_practice.rb:25: syntax error, unexpected '}', expecting end-of-input
[m...[1meduce(0){ |sum. num| sum + num[1;4m}[;1m[m
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby9
0
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby9
9
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby9
9
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hggit add     g  ruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubyruby_practice.rb:31:in `scrabble_score': [1mwrong number of arguments (given 0, expected 1) ([1;4mArgumentError[m[1m)[m
	from ruby_practice.rb:43:in `<main>'
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby7
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubyruby_practice.rb:55: syntax error, unexpected '|', expecting ')'
[m[1mcount = book.map([1;4m|[;1mbook| book[:words])[m
ruby_practice.rb:55: syntax error, unexpected ')', expecting end-of-input
[m...[1m= book.map(|book| book[:words][1;4m)[;1m[m
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubyruby_practice.rb:55: syntax error, unexpected '|', expecting ')'
[m[1mcount = book.map([1;4m|[;1mbook| book[:words])[m
ruby_practice.rb:55: syntax error, unexpected ')', expecting end-of-input
[m...[1m= book.map(|book| book[:words][1;4m)[;1m[m
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby3906
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby[["fly"]]
[["rat"]]
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubyruby_practice.rb:62:in `mutation?': [1mundefined local variable or method `word_1' for main:Object ([1;4mNameError[m[1m)[m
	from ruby_practice.rb:71:in `<main>'
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby["fly"]
["rat"]
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[21Dcode .               [15D[?1l>[?2004l
]2;code .]1;code[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hcode .ruby ruby_practice.rb[21Dcode .               [15Druby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;ruby[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004hruby ruby_practice.rb[?1l>[?2004l
]2;ruby ruby_practice.rb]1;rubytrue
[1m[7m%[27m[1m[0m                                                                                ]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice]2;camdenparker@Camdens-MacBook-Air]1;..elib_practice]7;file://Camdens-MacBook-Air.local/Users/camdenparker/actualize/delib_practice[0m[27m[24m[J[32m~/actualize/delib_practice [01;34m(main [31m✗[01;34m)[00m [K[?1h=[?2004h